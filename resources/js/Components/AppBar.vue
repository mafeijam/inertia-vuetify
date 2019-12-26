<template lang="pug">
    v-app-bar(app dark color="blue-grey darken-3" elevation="1" clipped-left)
      v-app-bar-nav-icon(@click.stop="$emit('update:drawer', !drawer)" color="blue-grey lighten-5")
      v-toolbar-title.blue-grey--text.text--lighten-5.pointer(@click="visit('/')") 超級系統
      v-spacer
      template(v-if="$page.auth.user")
        v-btn.mr-1(icon color="blue-grey lighten-5")
          v-badge(overlap color="red")
            template(v-slot:badge)
              span 3
            v-icon mdi-bell
        v-menu(offset-y nudge-bottom="5" transition="slide-y-transition" close-on-click)
          template(v-slot:activator="{ on }")
            v-btn(icon color="blue-grey lighten-5" v-on="on")
              v-icon mdi-account
          v-list(dense)
            v-list-item
              v-list-item-content
                v-list-item-title.blue-grey--text.text--darken-1 {{ $page.auth.user.name }}
            v-divider.my-2
            v-list-item(link @click="visit('/change-password')")
              v-list-item-icon
                v-icon(color="green") mdi-lock
              v-list-item-content
                v-list-item-title.green--text(style="line-height: initial;") 更改密碼
            v-list-item(link @click="logout")
              v-list-item-icon
                v-icon(color="red") mdi-logout
              v-list-item-content
                v-list-item-title.red--text(style="line-height: initial;") 登出
</template>

<script>
import axios from 'axios'

export default {
  props: ['drawer'],
  methods: {
    logout() {
      axios.post('/logout')
        .then(r => {
          sessionStorage.setItem('logout', true)
          window.location.replace('/')
        })
    }
  }
}
</script>
