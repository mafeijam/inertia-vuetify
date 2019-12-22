<template lang="pug">
  v-app
    v-content
      v-container.fill-height(fluid)
        v-row(align="center" justify="center")
          v-alert.pa-10(color="warning" border="left"
            colored-border elevation="2" style="font-size: 30px;") 帳號已停用
</template>

<script>
export default {
  metaInfo: {
    title: 'Banned'
  },
}
</script>
