<template lang="pug">
  v-snackbar(
    v-model="show"
    :timeout="timeout"
    top color="success"
    @input="clearSuccess"
  ) {{ $page.flash.success }}
    v-btn(icon @click="clearSuccess" dark)
      v-icon mdi-close
</template>

<script>
export default {
  data() {
    return {
      show: false,
      timeout: 6000,
    }
  },
  created() {
    if (sessionStorage.getItem('logout')) {
      sessionStorage.removeItem('flash.shown')
      sessionStorage.removeItem('logout')
      this.show = true
      this.$page.flash.success = '已成功登出'
    }
  },
  watch: {
    '$page.flash.success': {
      handler(val) {
        if (sessionStorage.getItem('flash.shown')) {
          return this.show = false
        }

        this.show = val !== null
        this.timeout = 6000
        sessionStorage.setItem('flash.shown', val)
      },
      immediate: true
    },
  },
  methods: {
    clearSuccess() {
      this.show = false
      this.timeout = 6000
      this.$page.flash.success = null
    }
  }
}
</script>
