<template lang="pug">
  v-row(align="center" justify="center")
    v-col.pt-0(cols="auto")
      v-card.elevation-1(width="600")
        v-toolbar(dark flat color="orange")
          v-toolbar-title 新增用戶
        v-card-text.pa-3.pa-lg-6
          v-form
            v-text-field(label="名稱" v-model="form.name" color="orange"
              prepend-inner-icon="mdi-account" filled
              :error-messages="$page.errors.name"
              @keydown="$page.errors.name = []"
              autofocus)
            v-text-field(label="電郵" v-model="form.email" color="orange"
              prepend-inner-icon="mdi-email" filled
              :error-messages="$page.errors.email"
              @keydown="$page.errors.email = []")
            v-text-field(label="密碼" v-model="form.password" color="orange"
              prepend-inner-icon="mdi-lock" filled type="password"
              :error-messages="$page.errors.password"
              @keydown="$page.errors.password = []")

            v-row(no-gutters)
              v-col(cols="12")
                span(style="font-size: 16px;") 角色
              v-col(cols="12" lg="4" v-for="r in roles" :key="r")
                v-checkbox.mt-1(v-model="form.roles" color="indigo" hide-details :label="r" :value="r")

            v-btn.mt-6(block color="indigo" dark large elevation="1" @click="submit" :loading="loading")
              <v-icon left>mdi-check</v-icon> 確認
</template>

<script>
import layout from '@/Components/LayoutMain'

export default {
  layout,
  metaInfo: {
    title: 'User Create'
  },
  props: ['roles'],
  data() {
    return {
      loading: false,
      form: {
        name: null,
        email: null,
        password: null,
        roles: []
      }
    }
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
