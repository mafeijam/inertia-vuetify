<template lang="pug">
  app-center
    v-card.elevation-1.mx-auto(width="400")
      v-toolbar(dark flat color="blue-grey darken-3")
        v-toolbar-title 輸入一次性密碼
      v-card-text.pa-3.pa-lg-6
        v-form(@submit.prevent)
          v-text-field(v-model="form.one_time_password" label="OTP"
            prepend-inner-icon="mdi-lock" filled
            @keydown="$page.flash.error = null"
            @keydown.enter="verify"
            :error-messages="error"
            autofocus)
          v-btn(block color="indigo" dark large elevation="1" @click="verify" :loading="loading") 確認
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      error: null,
      form: {
        one_time_password: null
      }
    }
  },
  watch: {
    '$page.flash.error': {
      handler(val) {
        this.error = val ? 'OTP 錯誤' : null
      },
      immediate: true
    },
  },
  methods: {
    verify() {
      this.loading = true
      this.$inertia.post('/auth/2fa?verify=1', this.form)
        .finally(() => this.loading = false)
    }
  }
}
</script>
