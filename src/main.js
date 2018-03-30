import Vue from 'vue'
import Demo from './Demo'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(Demo)
})