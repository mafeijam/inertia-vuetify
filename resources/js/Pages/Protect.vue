<template lang="pug">
  h1 Protect
</template>

<script>
import Layout from '@/Layouts/Main'

export default {
  layout(h, page) {
    return h(Layout, {
      props: {
        title: 'Protect',
        index: 2
      }
    }, [page])
  },
}
</script>
