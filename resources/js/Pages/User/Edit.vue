<template lang="pug">
  v-row(align="center" justify="center")
    confirm-dialog(:show.sync="confirm" :options="conformOptions")

    v-card.elevation-1(width="600")
      v-toolbar(dark flat color="orange")
        v-toolbar-title 修改用戶
      v-card-text.pa-6
        v-form
          v-text-field(label="名稱" v-model="form.name" color="orange"
            prepend-inner-icon="mdi-account" filled
            :error-messages="$page.errors.name"
            autofocus)
          v-text-field(label="電郵" v-model="form.email" color="orange"
            prepend-inner-icon="mdi-email" filled
            :error-messages="$page.errors.email")
          v-row(no-gutters)
            v-col.mr-3
              v-btn(block color="pink" dark large elevation="1" @click="deleteItem")
                <v-icon left size="20">mdi-close</v-icon> 刪除
            v-col.mr-3
              v-btn(block color="teal" dark large elevation="1" @click="resetItem")
                <v-icon left size="20">mdi-lock-reset</v-icon> 重設密碼
            v-col
              v-btn(block color="indigo" dark large elevation="1" @click="submit" :loading="loading")
                <v-icon left size="20">mdi-check</v-icon> 更新
</template>

<script>
import Layout from '@/Components/LayoutMain'
import conformOptions from '@/stub/confirm-options'

export default {
  layout: Layout,
  metaInfo: {
    title: 'User Edit'
  },
  remember: 'form',
  props: ['user'],
  data() {
    return {
      confirm: false,
      loading: false,
      form: { ...this.user },
      conformOptions: { ...conformOptions }
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$inertia.put(`/admin/user/${this.form.id}`, this.form)
        .finally(() => this.loading = false)
    },
    resetItem() {
      this.confirm = true
      this.conformOptions = {
        title: '確認重設用戶密碼',
        method: 'patch',
        endpoint: `/admin/user/${this.form.id}/reset?name=1`
      }
    },
    deleteItem() {
      this.confirm = true
      this.conformOptions = {
        title: '確認刪除',
        method: 'delete',
        endpoint: `/admin/user/${this.form.id}`
      }
    }
  }
}
</script>
