import Vue from 'vue'
import App from './App.vue'
import store from './store'

import bForm from 'bootstrap-vue/es/components/form/form'
import bAlert from 'bootstrap-vue/es/components/alert/alert'
import bProgress from 'bootstrap-vue/es/components/progress/progress'
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
import bButton from 'bootstrap-vue/es/components/button/button'
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('b-form', bForm)
Vue.component('b-alert', bAlert)
Vue.component('b-progress', bProgress)
Vue.component('b-form-group', bFormGroup)
Vue.component('b-button', bButton)
Vue.component('b-form-input', bFormInput)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
