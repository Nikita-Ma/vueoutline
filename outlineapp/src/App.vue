<template>
  <h1>{{ firstName }}</h1>
  <h2>{{ num > 1 ? 'Learning Vue..' : 'Loading..' }}</h2>
  <h3>{{ obj }}</h3>
  <a v-bind:href="linkUrl">bind</a>
  <a :href="linkUrl+ '/'+ someUrl">AA</a>
  <a :[atrKey]="linkUrl+ '/'+ someUrl">AA</a>
</template>

<script>

export default {
  name: 'App',
  components: {
  // null
  },
  data: () => ({
    firstName: 'Nik',
    num: 2,
    obj: {
      age: 19,
    },
    linkUrl: 'https://google.com',
    someUrl: 'https://google.com',
    atrKey: 'href',
  })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
