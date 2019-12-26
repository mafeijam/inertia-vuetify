<template lang="pug">
  v-app(v-if="auth")
    flash-message
    navigation(:show="drawer")
    app-bar(:drawer.sync="drawer")
    v-content
      v-container.pa-5(fluid scroll-region)
        transition(name="slide-x-reverse-transition" mode="out-in")
          slot
</template>

<script>
export default {
  data() {
    return {
      auth: false,
      drawer: true
    }
  },
  created() {
    fetch('http://192.168.1.47:10000/auth/ping')
      .then(r => r.text())
      .catch(e => window.location.reload())
      .then(t => {
        t === 'pong'
          ? this.auth = true
          : window.location.reload()
      })
  }
}
</script>
