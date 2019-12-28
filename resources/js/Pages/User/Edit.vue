<template lang="pug">
  v-row(align="center" justify="center")
    confirm-dialog(:show.sync="confirm" :options="conformOptions")

    v-col.pt-0(cols="12")
      v-card.elevation-1.mx-auto(width="600")
        v-toolbar(dark flat color="orange")
          v-toolbar-title 修改用戶
        v-card-text.pa-6
          v-row.mb-6(align="center" justify="space-between" no-gutters style="font-size: 10px;")
            span 最後登入
            span(v-if="user.last_login_edit") {{ user.last_login_edit }}
            v-chip(v-else dark x-small outlined label color="pink") 從未登入

          v-form
            v-text-field(label="名稱" v-model="form.name" color="orange"
              prepend-inner-icon="mdi-account" filled
              :error-messages="$page.errors.name"
              autofocus)
            v-text-field(label="電郵" v-model="form.email" color="orange"
              prepend-inner-icon="mdi-email" filled
              :error-messages="$page.errors.email")

            v-row(align="center" justify="space-between" no-gutters)
              span(style="font-size: 16px;") 啟用/停用
              v-switch(v-model="active" inset hide-details color="indigo"
                @change="toggle" style="margin-top: 0px; margin-right: -8px;")

            v-row.mt-6(no-gutters)
              v-col(cols="12")
                span(style="font-size: 16px;") 角色
              v-col(cols="4" v-for="r in roles" :key="r")
                v-checkbox.mt-1(v-model="form.all_roles" color="indigo" hide-details :label="r" :value="r")

            v-row.mt-6(no-gutters)
              v-col.mr-3(v-if="$can('刪除:用戶')")
                v-btn(block color="pink" dark large elevation="1" @click="deleteItem")
                  <v-icon left size="20">mdi-close</v-icon> 刪除
              v-col.mr-3
                v-btn(block color="teal" :dark="active" large elevation="1" @click="resetItem" :disabled="!active")
                  <v-icon left size="20">mdi-lock-reset</v-icon> 重設密碼
              v-col
                v-btn(block color="indigo" dark large elevation="1" @click="submit" :loading="loading")
                  <v-icon left size="20">mdi-check</v-icon> 確認
    v-col.mt-1(cols="12" v-if="active")
      google-2-fa(:user="user")
</template>

<script>
import layout from '@/Components/LayoutMain'
import conformOptions from '@/stub/confirm-options'

export default {
  layout,
  metaInfo: {
    title: 'User Edit'
  },
  remember: 'form',
  props: ['user', 'roles'],
  data() {
    return {
      confirm: false,
      loading: false,
      active: this.user.banned_at === null,
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
    },
    banItem() {
      this.confirm = true
      let self = this
      this.conformOptions = {
        title: '確認停用',
        method: 'patch',
        endpoint: `/admin/user/${this.form.id}/ban`,
        cancel() {
          self.active = true
        }
      }
    },
    unbanItem() {
      this.confirm = true
      let self = this
      this.conformOptions = {
        title: '確認啟用',
        method: 'patch',
        endpoint: `/admin/user/${this.form.id}/ban?unban=1`,
        cancel() {
          self.active = false
        }
      }
    },
    toggle() {
      this.active
        ? this.unbanItem()
        : this.banItem()
    }
  }
}
</script>
