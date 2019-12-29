<template lang="pug">
  v-app(v-if="auth")
    flash-message
    navigation(:connected="connected")
    app-bar
    v-content
      v-container.pa-3(fluid scroll-region)
        //- transition(name="fade-transition" mode="out-in")
        slot
</template>

<script>
import Echo from 'laravel-echo'

export default {
  data() {
    return {
      auth: false,
      connected: false
    }
  },
  created() {
    fetch('/auth/ping')
      .then(r => r.text())
      .catch(e => window.location.reload())
      .then(t => {
        if (t === 'pong') {
          this.auth = true
          this.connectEcho()
          this.subscribe()
        } else {
          window.location.reload()
        }
      })
  },
  methods: {
    connectEcho() {
      window.Echo = new Echo({
        broadcaster: 'pusher',
        key: process.env.MIX_PUSHER_APP_KEY,
        cluster: process.env.MIX_PUSHER_APP_CLUSTER,
        forceTLS: true,
        csrfToken: this.$page.csrf,
      })

      window.Echo.connector.pusher.connection.bind('connected', () => {
        this.connected = true
      })

      window.Echo.connector.pusher.connection.bind('disconnected', () => {
        this.connected = false
      })
    },
    subscribe() {
      window.Echo.private(`App.User.${this.$page.auth.user.id}`)
        .notification(notification => {
          let fn = 'notification' + notification.type.split('\\').pop()
          this[fn](notification)
        })
    },
    notificationPermissionChanged(n) {
      this.$page.auth.user.all_permissions = n.all_permissions
      this.$page.auth.user.all_roles = n.all_roles

      fetch(window.location.href)
        .then(r => {
          if (r.status !== 200) {
            sessionStorage.setItem('permission', '你的權限已更新')
            window.location.replace('/profile')
            return
          }
          sessionStorage.removeItem('flash.shown')
          this.$page.flash.success = '你的權限已更新'
        })
    }
  }
}
</script>
