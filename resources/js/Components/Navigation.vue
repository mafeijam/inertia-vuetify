<template lang="pug">
  v-navigation-drawer(v-model="show" app clipped width="200")
    v-list
      v-list-item-group(:value="path" color="orange" :mandatory="isActive")
        v-list-item(v-for="item, i in items" :key="i" @click="visit(item.link)" link :value="item.val" v-if="$can(item.permission)")
          v-list-item-icon
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.text }}
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      items: [
        { icon: 'mdi-account-group', link: '/admin/user', text: '用戶管理', val: 'user', permission: '查看:用戶管理' },
        { icon: 'mdi-key', link: '/admin/permission', text: '權限管理', val: 'permission', permission: '查看:權限管理' },
        { icon: 'mdi-folder-open', link: '/module/project', text: '項目管理', val: 'project', permission: '查看:項目管理' },
      ]
    }
  },
  computed: {
    path() {
      return this.$page.url.split('/')[1]
    },
    isActive() {
      return this.items.map(v => v.val).includes(this.path)
    }
  }
}
</script>
