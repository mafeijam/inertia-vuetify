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
    if (sessionStorage.getItem('message')) {
      sessionStorage.removeItem('flash.shown')
      this.show = true
      this.$page.flash.success = sessionStorage.getItem('message')
      sessionStorage.removeItem('message')
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
