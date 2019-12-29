<template lang="pug">
  v-row(dense)
    v-col(cols="12")
      v-card
        v-row.pa-5(no-gutters)
          v-col(cols="6")
            v-text-field(v-model="search" append-icon="mdi-magnify" single-line hide-details dense clearable)
          v-col.text-end(cols="6")
            v-btn(color="indigo" elevation="1" dark @click="visit('/admin/permission/create')" v-if="$can('新增:角色')")
              <v-icon left>mdi-key-plus</v-icon> 新增色角
        v-data-table(
          :headers="headers"
          :items="roles"
          :items-per-page="15"
          multi-sort
          :search="search"
        )
          template(v-slot:item.action="{ item }")
            v-tooltip(bottom color="green")
              template(v-slot:activator="{ on }")
                v-btn.mr-1(@click="editItem(item)" color="green" icon small v-on="on" v-if="$can('修改:角色')")
                  v-icon mdi-circle-edit-outline
              span 修改色角
            v-tooltip(bottom color="pink")
              template(v-slot:activator="{ on }")
                v-btn.mr-1(@click="editItem(item)" color="pink" icon small v-on="on" v-if="$can('刪除:角色')")
                  v-icon mdi-delete-circle-outline
              span 刪除色角
</template>

<script>
import layout from '@/Components/LayoutMain'

export default {
  layout,
  metaInfo: {
    title: 'Permission'
  },
  props: ['roles'],
  data() {
    return {
      confirm: false,
      headers: [
        { text: '名稱', value: 'name' },
        { text: '用戶數量', value: 'users_count' },
        { text: '新增日期', value: 'created_at', filterable: false },
      ],
      items: [],
      search: '',
    }
  },
  created() {
    if (this.$can('修改:角色|刪除:角色')) {
      this.headers.push({ text: '操作', value: 'action', sortable: false, align: 'end' })
    }
  },
  methods: {
    editItem(item) {
      this.$inertia.visit(`/admin/permission/role/${item.id}/edit`)
    }
  }
}
</script>
