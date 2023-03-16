const app = Vue.createApp({
    render() {
        return Vue.h('div', {class: 'root'}, ['Hi there'])
    }
})

app.mount('#app')
