<template lang="pug">
  v-dialog(v-model="show" max-width="290" @click:outside="hide" content-class="top")
    v-card
      v-card-title {{ options.title }}
      v-card-text(v-if="options.message") {{ options.message }}
      v-card-actions
        v-spacer
        v-btn(@click="hide" text color="pink") 取消
        v-btn(@click="confirm" text color="indigo" :loading="loading") 確認
</template>

<script>
export default {
  props: ['show', 'options'],
  data() {
    return {
      loading: false
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$page.flash.success = null
      }
    }
  },
  methods: {
    hide() {
      this.$emit('update:show', false)
    },
    confirm() {
      this.loading = true
      this.$inertia[this.options.method](this.options.endpoint, {
            preserveState: true,
            preserveScroll: true,
        })
        .finally(() => {
          this.loading = false
          this.hide()
        })
    }
  }
}
</script>
