<template lang="pug">
  v-app
    v-content
      v-container.fill-height(fluid)
        v-row(align="center" justify="center")
          v-card.elevation-1(width="400")
            v-toolbar(dark flat color="blue-grey darken-3")
              v-toolbar-title 超勁系統
            v-card-text.pa-6
              v-form
                v-text-field(label="帳號" prepend-inner-icon="mdi-email" filled)
                v-text-field(label="密碼" prepend-inner-icon="mdi-lock" filled type="password")
                v-checkbox.mt-0(v-model="checkbox" label="記住電郵" hide-details color="indigo")
            v-card-text.px-6.pt-0
              v-row
                v-col
                  v-btn(block color="indigo" dark large) 登入
                v-col
                  v-btn(block color="pink" dark large) 忘記密碼
</template>

<script>
export default {
  data() {
    return {
      checkbox: false
    }
  },
  metaInfo: {
    title: 'Login'
  }
}
</script>
