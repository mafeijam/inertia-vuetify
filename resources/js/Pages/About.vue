<template lang="pug">
  h1 About
</template>

<script>
import Layout from '@/Layouts/Main'

export default {
  layout(h, page) {
    return h(Layout, {
      props: {
        title: 'About',
        index: 1
      }
    }, [page])
  },
}
</script>
