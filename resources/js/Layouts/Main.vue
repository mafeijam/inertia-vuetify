<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" app clipped width="200")
      v-list
        v-list-item-group(:value="path" color="orange" mandatory)
          v-list-item(v-for="item, i in items" :key="i" @click="visit(item.link)" link :value="item.val")
            v-list-item-icon
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.text }}

    v-app-bar(app dark color="blue-grey darken-3" elevation="1" clipped-left)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer" color="blue-grey lighten-5")
      v-toolbar-title.blue-grey--text.text--lighten-5 超級系統
      v-spacer
      v-btn(icon color="blue-grey lighten-5")
        v-icon mdi-bell
      v-btn(icon color="blue-grey lighten-5")
        v-icon mdi-account

    v-content
      v-container.pa-5(fluid scroll-region)
        transition(name="slide-x-reverse-transition" mode="out-in")
          slot

    v-snackbar(
      v-model="$root.flashSnackbar"
      top color="success"
    ) {{ $root.flashMessage }}
      v-btn(small icon @click="$root.flashSnackbar = false" dark)
        v-icon mdi-close
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { icon: 'mdi-account-group', link: '/admin/users', text: '用戶管理', val: '/admin' },
        { icon: 'mdi-lock', link: '/protect', text: 'Protect', val: '/protect' }
      ],
    }
  },
  computed: {
    path() {
      return '/' + location.pathname.substr(1).split('/').shift()
    }
  },
  methods: {
    visit(link) {
      this.$inertia.visit(link, {
        preserveState: true,
        preserveScroll: true,
      })
    }
  }
}
</script>
