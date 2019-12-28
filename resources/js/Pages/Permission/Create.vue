<template lang="pug">
  v-row(align="center" justify="center")
    v-card.elevation-1(width="600")
      v-toolbar(dark flat color="orange")
        v-toolbar-title 新增角色
      v-card-text.pa-6
        v-form
          v-text-field(label="名稱" v-model="form.name" color="orange"
            prepend-inner-icon="mdi-key" filled
            :error-messages="$page.errors.name"
            @keydown="$page.errors.name = []"
            autofocus)
          v-btn(block color="indigo" dark large elevation="1" @click="submit" :loading="loading")
            <v-icon left>mdi-check</v-icon> 確認
      v-card-text.pa-6
        V-treeview(v-model="selection" :items="permissions" dense open-on-click selectable transition item-key="name")
</template>

<script>
import layout from '@/Components/LayoutMain'

export default {
  layout,
  metaInfo: {
    title: 'Permission Create'
  },
  data() {
    return {
      loading: false,
      form: {
        name: null,
      },
      selection: [],
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
      this.$inertia.post('/admin/permission/role', this.form)
        .finally(() => this.loading = false)
    }
  }
}
</script>
