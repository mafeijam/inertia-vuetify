<template lang="pug">
  v-row(align="center" justify="center")
    v-card.elevation-1(width="600")
      v-toolbar(dark flat color="orange")
        v-toolbar-title 新增用戶
      v-card-text.pa-6
        v-form
          v-text-field(label="名稱" v-model="form.name" color="orange"
            prepend-inner-icon="mdi-account" filled
            :error-messages="$page.errors.name")
          v-text-field(label="電郵" v-model="form.email" color="orange"
            prepend-inner-icon="mdi-email" filled
            :error-messages="$page.errors.email")
          v-text-field(label="密碼" v-model="form.password" color="orange"
            prepend-inner-icon="mdi-lock" filled type="password"
            :error-messages="$page.errors.password")
      v-card-text.px-6.pt-0
        v-row
          v-col
            v-btn(block color="indigo" dark large elevation="1" @click="submit" :loading="loading")
              <v-icon left>mdi-check</v-icon> 新增
</template>

<script>
import Layout from '@/Layouts/Main'

export default {
  layout: Layout,
  metaInfo: {
    title: 'User Create'
  },
  data() {
    return {
      loading: false,
      form: {
        name: null,
        email: null,
        password: null
      }
    }
  },
  mounted() {
    this.$root.flashSnackbar = false
  },
  methods: {
    submit() {
      this.loading = true
      this.$inertia.post('/admin/user', this.form)
        .finally(() => this.loading = false)
    }
  }
}
</script>
