<template lang="pug">
  app-center
    v-card.elevation-1.mx-auto(width="400")
      v-toolbar(dark flat color="blue-grey darken-3")
        v-toolbar-title 超勁系統
      v-card-text.pa-3.pa-lg-6
        v-form
          v-text-field(v-model="form.email" label="帳號"
            prepend-inner-icon="mdi-email" filled
            @keydown.enter="login"
            :error-messages="$page.errors.email"
            autofocus)
          v-text-field(v-model="form.password" label="密碼"
            prepend-inner-icon="mdi-lock" filled type="password"
            @keydown.enter="login"
            :error-messages="$page.errors.password")
          v-checkbox.mt-0.mb-6(v-model="form.remember" label="記住我" hide-details color="indigo")
          v-row(no-gutters)
            v-col.mr-3
              v-btn(block color="pink" dark large elevation="1") 忘記密碼
            v-col
              v-btn(block color="indigo" dark large elevation="1" @click="login" :loading="loading") 登入
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      checkbox: false,
      form: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  metaInfo: {
    title: 'Login'
  },
  methods: {
    login() {
      this.loading = true
      if (this.form.remember === false) {
        delete this.form.remember
      }
      this.$inertia.post('/auth/login', this.form)
        .finally(() => this.loading = false)
    }
  }
}
</script>
