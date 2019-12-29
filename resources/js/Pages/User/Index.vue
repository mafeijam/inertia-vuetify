<template lang="pug">
  v-row(dense)
    confirm-dialog(:show.sync="confirm" :options="conformOptions")

    v-col(cols="12")
      v-card
        v-row.pa-5(no-gutters)
          v-col(cols="6")
            v-text-field(v-model="search" append-icon="mdi-magnify" single-line hide-details dense clearable)
          v-col.text-end(cols="6")
            v-btn(color="indigo" elevation="1" dark @click="$inertia.visit('/admin/user/create')" v-if="$can('新增:用戶')")
              <v-icon left>mdi-account-plus</v-icon> 新增用戶
        v-data-table(
          :headers="headers"
          :items="users"
          :items-per-page="15"
          multi-sort
          :search="search"
        )
          template(v-slot:item.is_2fa_enabled="{ item }")
            v-chip(:color="item.is_2fa_enabled ? 'green' : 'red'" dark small outlined label) {{ item.is_2fa_enabled ? '啟用' : '停用' }}
          template(v-slot:item.all_roles="{ item }")
            v-chip.ml-2(v-for="r in item.all_roles" :key="r"
              :color="r === '超級管理員' ? 'purple darken-2' : 'blue-grey darken-2'" dark small outlined label) {{ r }}
          template(v-slot:item.last_login="{ item }")
            span(v-if="item.last_login") {{ item.last_login }}
            v-chip(v-else dark small outlined label color="pink") 從未登入
          template(v-slot:item.action="{ item }")
            v-tooltip(bottom color="green")
              template(v-slot:activator="{ on }")
                v-btn.mr-1(@click="editItem(item)" color="green" icon small v-on="on" v-if="$can('修改:用戶')")
                  v-icon mdi-account-edit
              span 修改用戶
            v-tooltip(bottom color="orange" v-if="item.banned_at == null")
              template(v-slot:activator="{ on }")
                v-btn.mr-1(@click="banItem(item)" color="orange" icon small v-on="on" v-if="$can('修改:用戶')")
                  v-icon mdi-cancel
              span 停用用戶
            v-tooltip(bottom color="purple" v-else)
              template(v-slot:activator="{ on }")
                v-btn.mr-1(@click="unbanItem(item)" color="purple" icon small v-on="on" v-if="$can('修改:用戶')")
                  v-icon mdi-account-check
              span 啟用用戶
              .caption (停用日期 {{ item.banned_at }})
            v-tooltip(bottom color="teal")
              template(v-slot:activator="{ on }")
                v-btn.mr-1(@click="resetItem(item)" color="teal" icon small v-on="on" :disabled="item.banned_at" v-if="$can('修改:用戶')")
                  v-icon mdi-lock-reset
              span 重設用戶密碼
            v-tooltip(bottom color="pink")
              template(v-slot:activator="{ on }")
                v-btn(@click="deleteItem(item)" color="pink" icon small v-on="on" v-if="$can('刪除:用戶')")
                  v-icon mdi-account-remove
              span 刪除用戶
</template>

<script>
import layout from '@/Components/LayoutMain'
import conformOptions from '@/stub/confirm-options'

export default {
  layout,
  metaInfo: {
    title: 'User'
  },
  props: ['users'],
  data() {
    return {
      confirm: false,
      headers: [
        { text: '名稱', value: 'name' },
        { text: '電郵', value: 'email' },
        { text: '雙重認證', value: 'is_2fa_enabled' },
        { text: '角色', value: 'all_roles' },
        { text: '最後登入', value: 'last_login', filterable: false },
        { text: '新增日期', value: 'created_at', filterable: false },
        { text: '最後更新', value: 'updated_at', filterable: false },
        { text: '操作', value: 'action', sortable: false, align: 'right' },
      ],
      items: [],
      search: '',
      conformOptions: { ...conformOptions }
    }
  },
  methods: {
    editItem(item) {
      this.$inertia.visit(`/admin/user/${item.id}/edit`)
    },
    resetItem(item) {
      this.confirm = true
      this.conformOptions = {
        title: '確認重設用戶密碼',
        message: item.name,
        method: 'patch',
        endpoint: `/admin/user/${item.id}/reset?name=1`
      }
    },
    deleteItem(item) {
      this.confirm = true
      this.conformOptions = {
        title: '確認刪除',
        message: item.name,
        method: 'delete',
        endpoint: `/admin/user/${item.id}`
      }
    },
    banItem(item) {
      this.confirm = true
      this.conformOptions = {
        title: '確認停用',
        message: item.name,
        method: 'patch',
        endpoint: `/admin/user/${item.id}/ban?name=1`
      }
    },
    unbanItem(item) {
      this.confirm = true
      this.conformOptions = {
        title: '確認啟用',
        message: item.name,
        method: 'patch',
        endpoint: `/admin/user/${item.id}/ban?name=1&unban=1`
      }
    }
  }
}
</script>
