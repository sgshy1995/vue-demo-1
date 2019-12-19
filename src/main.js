const Vue = window.Vue

new Vue({
    data: {
        obj: {
            a: 0
        }
    },
    template: `
    <div>
      {{obj.b}}
      <button @click='one'>One</button>
    </div>
    `,
    methods: {
        one() {
            Vue.set(this.obj, 'b', 1)
            // this.$set(this.obj, 'b', 1)
        }
    }
}).$mount('#app')