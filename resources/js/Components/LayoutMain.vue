<template lang="pug">
  v-app(v-if="auth")
    flash-message
    navigation
    app-bar
    v-content
      v-container.pa-3(fluid scroll-region)
        //- transition(name="fade-transition" mode="out-in")
        slot
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    }
  },
  created() {
    fetch('/auth/ping')
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
