import { InertiaApp } from '@inertiajs/inertia-vue'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(InertiaApp)
Vue.use(Vuetify)

const app = document.getElementById('app')

new Vue({
  vuetify: new Vuetify,
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(app)
