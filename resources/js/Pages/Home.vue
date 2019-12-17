<template lang="pug">
  h1 home
</template>

<script>
import Layout from '@/Layouts/Main'

export default {
  layout(h, page) {
    return h(Layout, {
      props: {
        title: 'Home',
        index: 0
      }
    }, [page])
  },
}
</script>
