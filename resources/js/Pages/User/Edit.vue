<template lang="pug">
  v-row(align="center" justify="center")
    v-dialog(v-model="confirm" max-width="290")
      v-card
        v-card-title 確認刪除
        v-card-actions
          v-spacer
          v-btn(@click="confirm = false" text color="pink") 取消
          v-btn(@click="confirmDelete" text color="indigo" :loading="loading.delete") 確認

    v-card.elevation-1(width="600")
      v-toolbar(dark flat color="orange")
        v-toolbar-title 修改用戶
      v-card-text.pa-6
        v-form
          v-text-field(label="名稱" v-model="form.name" color="orange"
            prepend-inner-icon="mdi-account" filled
            :error-messages="$page.errors.name")
          v-text-field(label="電郵" v-model="form.email" color="orange"
            prepend-inner-icon="mdi-email" filled
            :error-messages="$page.errors.email")
      v-card-text.px-6.pt-0
        v-row
          v-col
            v-btn(block color="pink" dark large elevation="1" @click="deleteItem")
              <v-icon left>mdi-close</v-icon> 刪除
          v-col
            v-btn(block color="indigo" dark large elevation="1" @click="submit" :loading="loading.save")
              <v-icon left>mdi-check</v-icon> 更新
</template>

<script>
import Layout from '@/Layouts/Main'

export default {
  layout: Layout,
  metaInfo: {
    title: 'User Create'
  },
  remember: 'form',
  props: ['user'],
  data() {
    return {
      confirm: false,
      loading: {
        save: false,
        delete: false
      },
      form: { ...this.user }
    }
  },
  mounted() {
    this.$root.flashSnackbar = false
  },
  methods: {
    submit() {
      this.loading.save = true
      this.$inertia.put(`/admin/user/${this.form.id}`, this.form)
        .finally(() => this.loading.save = false)
    },
    deleteItem() {
      this.confirm = true
      this.$root.flashSnackbar = false
    },
    confirmDelete() {
      this.loading.delete = true
      this.$inertia.delete(`/admin/user/${this.form.id}`)
        .finally(() => this.loading.delete = false)
    }
  }
}
</script>
