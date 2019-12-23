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
  watch: {
    '$page.flash.success': {
      handler(val) {
        this.show = val !== null
        this.timeout = 6000
      },
      immediate: true
    },
  },
  methods: {
    clearSuccess() {
      this.show = false
      this.$page.flash.success = null
    }
  }
}
</script>
