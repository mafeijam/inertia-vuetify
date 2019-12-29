<template lang="pug">
  v-card.elevation-1.mx-auto(width="600")
    v-toolbar(dark flat color="orange")
      v-toolbar-title 雙重認證
    v-card-text.pa-3.pa-lg-6
      v-row(align="center" justify="space-between" no-gutters)
        span(style="font-size: 16px;") 啟用/停用
        v-switch(v-model="g2fa" inset hide-details color="indigo"
          @change="toggle2fa" style="margin-top: 0px; margin-right: -8px;")

      v-row.mt-6(align="center" justify="space-between" no-gutters v-if="g2fa")
        span(style="font-size: 16px;") QR CODE
        v-btn(color="indigo" dark elevation="1" @click.stop="show = true")
          <v-icon left>mdi-qrcode</v-icon> 查看

    v-dialog(v-model="show" max-width="280" :persistent="persistent")
      v-card.text-center
        v-card-title.pink--text(v-if="persistent") 請立即掃瞄註冊
        v-card-title(v-else) 掃瞄註冊
        v-card-text
          img(:src="user.qr_code")
        v-card-text
          .blue-grey--text.text--darken-2 或輸入
          .indigo--text.text--darken-2.font-weight-black {{ user.google2fa_secret }}
        v-card-text
          v-btn(v-if="persistent" @click="registered" elevation="1" dark color="pink")
            <v-icon left>mdi-check</v-icon> 確認
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      show: false,
      persistent: false,
      g2fa: this.user.is_2fa_enabled
    }
  },
  methods: {
    toggle2fa() {
      this.$page.flash.success = null
      this.$inertia.patch(`/auth/2fa/${this.user.id}`, { toggle: this.g2fa })
        .then(() => {
          this.persistent = this.g2fa
          this.show = this.g2fa
        })
    },
    registered() {
      this.persistent = false
      this.show = false
    }
  }
}
</script>
