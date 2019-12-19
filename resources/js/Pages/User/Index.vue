<template lang="pug">
  v-row(dense)
    v-dialog(v-model="confirm" max-width="290")
      v-card
        v-card-title 確認刪除
        v-card-text {{ selected.name }}
        v-card-actions
          v-spacer
          v-btn(@click="confirm = false" text color="pink") 取消
          v-btn(@click="confirmDelete" text color="indigo" :loading="loading") 確認


    v-col.mb-2(cols="6")
      v-text-field(v-model="search" prepend-inner-icon="mdi-magnify" single-line hide-details dense clearable)
    v-col.mb-2.text-end(cols="6")
      v-btn(color="indigo" elevation="1" dark @click="$inertia.visit('/admin/user/create')")
        <v-icon left>mdi-account-plus</v-icon> 新增用戶

    v-col(cols="12")
      v-data-table.elevation-1(
        :headers="headers"
        :items="users"
        :items-per-page="15"
        multi-sort
        :search="search"
      )
        template(v-slot:item.action="{ item }")
          v-btn.mr-2(@click="editItem(item)" color="green" icon small)
            v-icon mdi-account-edit
          v-btn(@click="deleteItem(item)" color="pink" icon small)
            v-icon mdi-account-remove
</template>

<script>
import Layout from '@/Layouts/Main'

export default {
  layout: Layout,
  metaInfo: {
    title: 'User'
  },
  props: ['users'],
  data() {
    return {
      loading: false,
      confirm: false,
      headers: [
        { text: '名稱', value: 'name' },
        { text: '電郵', value: 'email' },
        { text: '新增日期', value: 'created_at' },
        { text: '最後更新', value: 'updated_at' },
        { text: '操作', value: 'action', sortable: false, align: 'right' },
      ],
      items: [],
      search: '',
      selected: {
        name: null
      }
    }
  },
  methods: {
    editItem(item) {
      this.$inertia.visit(`/admin/user/${item.id}/edit`)
    },
    deleteItem(item) {
      this.selected = item
      this.confirm = true
      this.$root.flashSnackbar = false
    },
    confirmDelete() {
      this.loading = true
      this.$inertia.delete(`/admin/user/${this.selected.id}`)
        .finally(() => this.loading = false)
    }
  }
}
</script>
