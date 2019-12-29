<template lang="pug">
  v-row(align="center" justify="center")
    confirm-dialog(:show.sync="confirm" :options="conformOptions")

    v-card.elevation-1(width="600")
      v-toolbar(dark flat color="orange")
        v-toolbar-title 修改角色
      v-card-text.pa-6
        v-form
          v-text-field(label="名稱" v-model="form.name" color="orange"
            prepend-inner-icon="mdi-key" filled
            :error-messages="$page.errors.name"
            @keydown="$page.errors.name = []"
            autofocus)

          v-row(justify="start" no-gutters)
            v-col.mb-1(cols="12")
              span(style="font-size: 16px;") 用戶
            v-col(cols="12")
              v-chip.mr-2(v-for="r in role.users" :key="r.id"
                color="indigo" dark small outlined label) {{ r.name }}

          v-row.my-6(no-gutters)
            v-col.mr-3(v-if="$can('刪除:用戶')")
              v-btn(block color="pink" dark large elevation="1" @click="deleteItem")
                <v-icon left size="20">mdi-close</v-icon> 刪除
            v-col
              v-btn(block color="indigo" dark large elevation="1" @click="submit" :loading="loading")
                <v-icon left>mdi-check</v-icon> 確認
          v-row(no-gutters)
            v-col.mb-1(cols="12")
              span(style="font-size: 16px;") 權限
          v-treeview(v-model="selection" :items="permissions" dense open-on-click selectable transition item-key="name")
</template>

<script>
import layout from '@/Components/LayoutMain'
import conformOptions from '@/stub/confirm-options'

export default {
  layout,
  metaInfo: {
    title: 'Permission Create'
  },
  props: ['role', 'all_permissions'],
  data() {
    return {
      loading: false,
      confirm: false,
      conformOptions: { ...conformOptions },
      form: {
        name: this.role.name,
      },
      selection: this.all_permissions,
      permissions: [
        {
          name: '用戶管理',
          children: [
            { name: '查看:用戶管理' },
            { name: '新增:用戶' },
            { name: '修改:用戶' },
            { name: '刪除:用戶' },
          ]
        },
        {
          name: '權限管理',
          children: [
            { name: '查看:權限管理' },
            { name: '新增:角色' },
            { name: '修改:角色' },
            { name: '刪除:角色' },
          ]
        },
        {
          name: '項目管理',
          children: [
            { name: '查看:項目管理' },
            { name: '新增:項目' },
            { name: '修改:項目' },
            { name: '刪除:項目' },
          ]
        }
      ]
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.form.selection = this.selection
      this.$inertia.put(`/admin/permission/role/${this.role.id}`, this.form)
        .finally(() => this.loading = false)
    },
    deleteItem() {
      this.confirm = true
      this.conformOptions = {
        title: '確認刪除',
        method: 'delete',
        endpoint: `/admin/permission/role/${this.role.id}`
      }
    }
  }
}
</script>
