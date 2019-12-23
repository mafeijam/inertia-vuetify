<template lang="pug">
  v-app(v-if="ok")
    v-navigation-drawer(v-model="drawer" app clipped width="200")
      v-list
        v-list-item-group(:value="path" color="orange" :mandatory="isActive")
          v-list-item(v-for="item, i in items" :key="i" @click="visit(item.link)" link :value="item.val")
            v-list-item-icon
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.text }}

    v-app-bar(app dark color="blue-grey darken-3" elevation="1" clipped-left)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer" color="blue-grey lighten-5")
      v-toolbar-title.blue-grey--text.text--lighten-5.pointer(@click="visit('/')") 超級系統
      v-spacer
      v-btn(icon color="blue-grey lighten-5" v-if="$page.auth.user")
        v-badge(overlap color="red")
          template(v-slot:badge)
            span 3
          v-icon mdi-bell
      v-menu(offset-y nudge-bottom="5" close-on-click v-if="$page.auth.user")
        template(v-slot:activator="{ on }")
          v-btn(icon color="blue-grey lighten-5" v-on="on")
            v-icon mdi-account
        v-list(dense)
          v-list-item
            v-list-item-content
              v-list-item-subtitle Hi, {{ $page.auth.user.name }}
          v-divider
          v-list-item(link @click="changePassword")
            v-list-item-icon
              v-icon(color="green") mdi-lock
            v-list-item-content
              v-list-item-title.green--text(style="line-height: initial;") 更改密碼
          v-list-item(link @click="logout")
            v-list-item-icon
              v-icon(color="red") mdi-logout
            v-list-item-content
              v-list-item-title.red--text(style="line-height: initial;") 登出

    v-content
      v-container.pa-5(fluid scroll-region)
        transition(name="slide-x-reverse-transition" mode="out-in")
          slot

    flash-message
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      ok: false,
      items: [
        { icon: 'mdi-account-group', link: '/admin/users', text: '用戶管理', val: 'admin' },
        { icon: 'mdi-lock', link: '/protect', text: 'Protect', val: 'protect' }
      ]
    }
  },
  computed: {
    path() {
      return this.$page.url.split('/').shift()
    },
    isActive() {
      return this.items.map(v => v.val).includes(this.path)
    }
  },
  beforeCreate() {
    fetch('http://192.168.1.47:10000/auth/ping')
      .then(r => {
        if (r.url === 'http://192.168.1.47:10000/login') {
          return window.location.reload()
        }
        this.ok = true
      })
      .catch(e => window.location.reload())
  },
  methods: {
    visit(link) {
      this.$inertia.visit(link, {
        preserveState: true,
        preserveScroll: true,
      })
    },
    changePassword() {
      this.visit('/change-password')
    },
    logout() {
      this.$inertia.post('/logout', {
        preserveState: false
      })
    }
  }
}
</script>
