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

window.Pusher = require('pusher-js')

const app = document.getElementById('app')

let page = JSON.parse(app.dataset.page)

new Vue({
  vuetify: new Vuetify,
  metaInfo: {
    title: 'Loading…',
    titleTemplate: page.props.local ? '[local] %s | Super System' : '%s | Super System',
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: page,
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default)
    },
  }),
}).$mount(app)
