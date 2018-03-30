import Vue from 'vue'
import Demo from './Demo'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(Demo)
})
