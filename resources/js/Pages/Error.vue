<template lang="pug">
  app-center
    v-alert.pa-10(color="red" border="left" width="350"
      colored-border elevation="2" style="font-size: 30px;")
        v-row.blue-grey--text.text--darken-1(align="center" justify="center")
          span Error {{ status}}
    .text-right
      v-btn(color="pink" dark elevation="1" @click="goBack")
        <v-icon left size="20">mdi-arrow-left-circle</v-icon> 返回
</template>

<script>
export default {
  metaInfo: {
    title: 'Error'
  },
  props: ['status'],
  methods: {
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>
