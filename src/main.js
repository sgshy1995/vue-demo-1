import Vue from 'vue'
import Demo from './components/demo.vue'

new Vue({
  render(h) {
    return h(Demo)
  }
}).$mount('#app')