<template lang="pug">
  v-navigation-drawer(v-model="show" app clipped width="200")
    v-list
      v-list-item-group(:value="path" color="orange" :mandatory="isActive")
        v-list-item(v-for="item, i in items" :key="i" @click="visit(item.link)" link :value="item.val")
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
        { icon: 'mdi-account-group', link: '/admin/users', text: '用戶管理', val: 'admin' },
        { icon: 'mdi-lock', link: '/protect', text: 'Protect', val: 'protect' }
      ]
    }
  },
  computed: {
    path() {
      return this.$page.url.split('/').shift()
    },
    isActive() {
      return this.items.map(v => v.val).includes(this.path)
    }
  }
}
</script>
