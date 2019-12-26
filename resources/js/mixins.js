export default {
  methods: {
    visit(link) {
      this.$inertia.visit(link, {
        preserveState: true,
        preserveScroll: true,
      })
    },
  }
}
