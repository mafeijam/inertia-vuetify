<template lang="pug">
  v-row(align="center" justify="center")
    v-col.pt-0(cols="12")
      v-card.elevation-1.mx-auto(width="600")
        v-toolbar(dark flat color="orange")
          v-toolbar-title 更改密碼
        v-card-text.pa-3.pa-lg-6
          v-text-field(label="密碼" v-model="form.password" color="orange"
            prepend-inner-icon="mdi-lock" filled type="password"
            :error-messages="$page.errors.password"
            @keydown="$page.errors.password = []"
            autofocus)
          v-text-field(label="確認密碼" v-model="form.password_confirmation" color="orange"
            prepend-inner-icon="mdi-lock" filled type="password")
          v-btn(block color="indigo" dark large elevation="1" @click="submit" :loading="loading")
            <v-icon left>mdi-check</v-icon> 確認

    v-col.mt-1(cols="12")
      google-2-fa(:user="$page.auth.user")
</template>

<script>
import layout from '@/Components/LayoutMain'

const form = {
  password: null,
  password_confirmation: null
}

export default {
  layout,
  metaInfo: {
    title: 'Change Password'
  },
  data() {
    return {
      loading: false,
      form: {...form },
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$inertia.patch('/auth/change-password', this.form)
        .then(() => this.form = { ...form })
        .finally(() => this.loading = false)
    }
  }
}
</script>
