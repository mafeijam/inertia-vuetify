<template lang="pug">
  v-row(align="center" justify="center")
    v-col.pt-0(cols="12")
      v-card.elevation-1.mx-auto(width="600")
        v-toolbar(dark flat color="orange")
          v-toolbar-title 個人檔案
        v-card-text.pa-3.pa-lg-6(style="font-size: 16px;")
          v-row(align="center" justify="space-between" no-gutters)
            .blue-grey--text.text--darken-2 用戶名稱
            .indigo--text.text--darken-2.font-weight-black {{ user.name }}
          v-row.mt-6(align="center" justify="space-between" no-gutters)
            .blue-grey--text.text--darken-2 用戶電郵
            .indigo--text.text--darken-2.font-weight-black {{ user.email }}
          v-row.mt-6(align="center" justify="space-between" no-gutters)
            .blue-grey--text.text--darken-2 雙重認證
            v-chip(:color="user.is_2fa_enabled ? 'green' : 'red'" dark small outlined label) {{ user.is_2fa_enabled ? '啟用' : '停用' }}
          v-row.mt-6(align="center" justify="space-between" no-gutters)
            .blue-grey--text.text--darken-2 角色
            span
              v-chip.ml-2(v-for="r in user.all_roles" :key="r"
                :color="r === '超級管理員' ? 'purple darken-2' : 'blue-grey darken-2'" dark small outlined label) {{ r }}
          v-row.mt-6(align="center" justify="space-between" no-gutters)
            .blue-grey--text.text--darken-2 開戶日期
            .indigo--text.text--darken-2.font-weight-black {{ user.created_at }}
          v-row.mt-6(align="center" justify="space-between" no-gutters)
            .blue-grey--text.text--darken-2 上次登入
            .indigo--text.text--darken-2.font-weight-black {{ $page.auth.last_login }}
</template>

<script>
import layout from '@/Components/LayoutMain'

export default {
  layout,
  metaInfo: {
    title: 'Profile'
  },
  computed: {
    user() {
      return this.$page.auth.user
    }
  }
}
</script>
