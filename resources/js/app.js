import { InertiaApp } from '@inertiajs/inertia-vue'
import Vuetify from 'vuetify/lib'
import VueMeta from 'vue-meta'
import Vue from 'vue'

import './auto-import.js'
import './axios.interceptors.js'

import Mixins from './mixins'

Vue.use(InertiaApp)
Vue.use(Vuetify)
Vue.use(VueMeta)

Vue.mixin(Mixins)

const app = document.getElementById('app')

new Vue({
  vuetify: new Vuetify,
  metaInfo: {
    title: 'Loading…',
    titleTemplate: '%s | Super System',
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default)
    },
  }),
}).$mount(app)
