const app = Vue.createApp({
    data() {
        return {
            i: 0
        }
    },

    template: `
    <b-child :a="i"></b-child>
    `,

    mounted() {
        setInterval(() => {
            this.i++;
        }, 500)
    }


})

app.component('b-child', {
    props: ['a'],
    template: `
    This "a" prop {{a}}
    `,
    mounted() {
        console.log(this.$root)
    }
})
app.mount('#app')
