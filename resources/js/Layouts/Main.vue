<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" app clipped)
      v-list
        v-list-item-group(:value="path" color="orange" mandatory)
          v-list-item(v-for="item, i in items" :key="i" @click="visit(item.link)" link :value="item.link")
            v-list-item-icon
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.text }}

    v-app-bar(app dark color="blue-grey darken-3" elevation="1" clipped-left)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-toolbar-title 超級系統
      v-spacer
      v-btn(icon)
        v-icon mdi-bell
      v-btn(icon)
        v-icon mdi-account

    v-content
      v-container(fluid scroll-region)
        transition(name="slide-x-reverse-transition" mode="out-in")
          slot
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { icon: 'mdi-home', link: '/', text: 'Home' },
        { icon: 'mdi-account', link: '/about', text: 'About' },
        { icon: 'mdi-lock', link: '/protect', text: 'Protect' }
      ],
    }
  },
  computed: {
    path() {
      return '/' + location.pathname.substr(1).split('/').shift()
    }
  },
  watch: {
    index: {
      immediate: true,
      handler(val) {
        this.item = val
      }
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
