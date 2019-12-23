<template lang="pug">
  v-app
    v-content
      v-container.fill-height(fluid)
        flash-message
        v-row(align="center" justify="center")
          .display-3 Home
  //- div
  //-   v-btn(@click="add") add
  //-   draggable(v-model="headers" v-bind="dragOptions")
  //-     v-card.my-2.drag-list(v-for="h in headers" :key="h.value" tile elevation="1")
  //-       v-card-text
  //-         v-row(no-gutters)
  //-           v-col.handle.mr-3(cols="auto")
  //-             v-icon mdi-menu
  //-           v-col {{ h.text }}
    //- v-text-field(v-model="obj.key1" label="key1")
    //- v-btn(@click="reset") reset
</template>

<script>
import layout from '@/Components/LayoutMain'
import draggable from 'vuedraggable'

const obj = {
  key1: '1',
  key2: '2'
}

export default {
  // layout,
  metaInfo: {
    title: 'Home'
  },
  components: { draggable },
  data() {
    return {
      index: 5,
      headers: [
        { text: 'Header1', value: 'Header1' },
        { text: 'Header2', value: 'Header2' },
        { text: 'Header3', value: 'Header3' },
        { text: 'Header4', value: 'Header4' },
      ],
      items: [],
      obj: { ...obj }
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 300,
        ghostClass: 'ghost',
        handle: '.handle'
      };
    }
  },
  methods: {
    reset() {
      this.obj = { ...obj }
    },
    add() {
      this.headers.push({text:'foo', value: this.index})
      this.index++
    }
  }
}
</script>
