const app = Vue.createApp({
    data() {
        return {
            i: 'String'
        }
    },

    template: `
    <b-child :a="'i'"></b-child>
    `,

    mounted() {
        setInterval(() => {
            this.i++;
        }, 500)
    }


})

app.component('b-child', {
    props: {
        a: {
            type: [String],
            default: "I'm string",
            validator(value) {
                console.log(this)
                return true
            }
        }
    },
    template: `
    This "a" prop {{a}}
    `
})
app.mount('#app')
