<template lang="pug">
  v-app
    v-content
      v-container.fill-height(fluid)
        v-row(align="center" justify="center")
          v-col.text-center(cols="auto")
            v-alert.pa-10(color="red" border="left"
              colored-border elevation="2" style="font-size: 30px;") {{ status}} | Error...
            v-btn(color="pink" dark large elevation="1" @click="goBack")
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
