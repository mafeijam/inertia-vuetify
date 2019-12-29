<template lang="pug">
  v-navigation-drawer(v-model="show" app clipped width="200")
    v-list
      v-list-item-group(:value="path" color="orange" :mandatory="isActive")
        v-list-item(v-for="item, i in items" :key="i" @click="visit(item.link)" link :value="item.val" v-if="$can(item.permission)")
          v-list-item-icon
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.text }}
    template(v-slot:append)
      v-row.pa-3(align="center" justify="space-between" no-gutters)
        v-icon(:color="connected ? 'green' : 'red'") {{ connected ? 'mdi-check-network' : 'mdi-close-network' }}
        v-chip(color="blue-grey" dark small outlined label) {{ online.length }} 人在線
</template>

<script>
export default {
  props: ['connected', 'online'],
  data() {
    return {
      show: window.innerWidth >= 1260,
      items: [
        { icon: 'mdi-account-group', link: '/admin/user', text: '用戶管理', val: 'user', permission: '查看:用戶管理' },
        { icon: 'mdi-key', link: '/admin/permission', text: '權限管理', val: 'permission', permission: '查看:權限管理' },
        { icon: 'mdi-folder-open', link: '/module/project', text: '項目管理', val: 'project', permission: '查看:項目管理' },
      ]
    }
  },
  created() {
    this.$root.$on('updateMenu', hide => {
      if (hide) {
        return this.show = false
      }
      this.show = !this.show
    })
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
