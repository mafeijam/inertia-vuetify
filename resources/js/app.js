import { InertiaApp } from '@inertiajs/inertia-vue'
import Vuetify from 'vuetify/lib'
import VueMeta from 'vue-meta'
import Vue from 'vue'

Vue.use(InertiaApp)
Vue.use(Vuetify)
Vue.use(VueMeta)

window.eventBus = new Vue

const app = document.getElementById('app')

new Vue({
  vuetify: new Vuetify,
  metaInfo: {
    title: 'Loading…',
    titleTemplate: '%s | Super System',
  },
  data() {
    return {
      flashSnackbar: false,
      flashMessage: '',
    }
  },
  mounted() {
    eventBus.$on('flashMessage', value => {
      this.flashMessage = value
      this.flashSnackbar = true
    })
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
      transformProps: props => {
        if (props.flash.success) {
          eventBus.$emit('flashMessage', props.flash.success)
        }
        return props
      },
    },
  }),
}).$mount(app)
