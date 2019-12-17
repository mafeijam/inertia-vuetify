<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" app clipped)
      v-list
        v-list-item-group(v-model="item")
          v-list-item(v-for="item, i in items" :key="i" @click="visit(item.link)")
            v-list-item-icon
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.text }}

    v-app-bar(app dark dense color="blue lighten-1" elevation="1" clipped-left)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-toolbar-title {{path}}

    v-content
      v-container.fill-height(fluid)
        slot
</template>

<script>
export default {
  props: {
    title: String,
    index: Number,
  },
  data() {
    return {
      drawer: true,
      item: this.index,
      items: [
        { icon: 'mdi-home', link: '/', text: 'Home' },
        { icon: 'mdi-account', link: '/about', text: 'About' }
      ],
    }
  },
  computed: {
    path() {
      return document.location.pathname
    }
  },
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title || 'App'
      },
    },
  },
  methods: {
    visit(link) {
      this.$inertia.visit(link)
    }
  }
}
</script>
