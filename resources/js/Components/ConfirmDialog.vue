<template lang="pug">
  v-dialog(v-model="show" max-width="290" @click:outside="hide" content-class="top")
    v-card
      v-card-title {{ options.title }}
      v-card-text(v-if="options.message") {{ options.message }}
      v-card-actions
        v-spacer
        v-btn(@click="cancel" text color="pink") 取消
        v-btn(@click="confirm" text color="indigo" :loading="loading") 確認
</template>

<script>
export default {
  props: ['show', 'options'],
  data() {
    return {
      loading: false,
      confirmed: false,
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$page.flash.success = null
        this.confirmed = false
      }
    }
  },
  methods: {
    hide() {
      this.$emit('update:show', false)
      if (this.options.cancel !== undefined && !this.confirmed) {
        this.options.cancel()
      }
    },
    confirm() {
      this.loading = true
      this.confirmed = true
      this.$inertia[this.options.method](this.options.endpoint, {
          preserveState: true,
          preserveScroll: true,
        })
        .finally(() => {
          this.loading = false
          this.hide()
        })
    },
    cancel() {
      this.$emit('update:show', false)
      if (this.options.cancel !== undefined) {
        this.options.cancel()
        this.confirmed = false
      }
    }
  }
}
</script>
