<template lang="pug">
  v-data-table.elevation-1(
    :headers="headers"
    :items="items"
    :items-per-page="5"
    multi-sort
  )
</template>

<script>
import Layout from '@/Layouts/Main'

export default {
  layout: Layout,
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      headers: [
        { text: 'Header1', value: 'Header1' },
        { text: 'Header2', value: 'Header2' },
        { text: 'Header3', value: 'Header3' },
        { text: 'Header4', value: 'Header4' },
      ],
      items: []
    }
  }
}
</script>
