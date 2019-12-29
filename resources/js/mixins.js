export default {
  methods: {
    visit(link) {
      if (window.innerWidth <= 1260) {
        this.$root.$emit('updateMenu', true)
      }
      this.$inertia.visit(link, {
        preserveState: true,
        preserveScroll: true,
      })
    },
    $can(permission) {
      if (this.$page.auth.user.all_roles.includes('超級管理員')) {
        return true
      }
      for (let p of permission.split('|')) {
        if (this.$page.auth.user.all_permissions.includes(p)) {
          return true
        }
      }
      return false
    }
  }
}
