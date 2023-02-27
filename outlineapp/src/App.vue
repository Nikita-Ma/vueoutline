<template>
  <h1>{{ firstName }}</h1>
  <h2>{{ num > 1 ? 'Learning Vue..' : 'Loading..' }}</h2>
  <h3>{{ obj }}</h3>
  <a v-bind:href="linkUrl">bind</a>
  <a :href="linkUrl+ '/'+ someUrl">AA</a>
  <a :[atrKey]="linkUrl+ '/'+ someUrl">AA</a>
  <div class="message" v-if="msgIsVisible"> <!--if variable true-->
    Some message!
  </div>
  <div class="message" v-else-if="msgIsVisible === 2">v else message</div><!--if variable 2-->
  <div class="message" v-else><!--if variable false-->
    Another message!
  </div>
  <template v-else-if="msgIsVisible === 3">
    <!--no render in DOM-->
    <h3>Some msg</h3>
  </template>
  <template v-else-if="msgIsVisible === 4">
    <!--no render in DOM-->
    <h3>Some msg</h3>
  </template>
  <template v-else-if="msgIsVisible === 4">
    <!--
    * render DOM with hidde display: none
    * not working with v-if and etc.
    -->
    <h2 v-show="isVisibleBlock">V Show</h2>
  </template>
  <div class="text-input" v-if="inputNameVisible"><input key="haha-react" type="text" placeholder="Input text"></div>
  <div class="name-input" v-else><input  key="haha-no-react" type="text" placeholder="Input name"></div>
</template>
<!-- Event -->
<button @click="inputNameVisible = !inputNameVisible">Change form</button>
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
    msgIsVisible: 1,
    isVisibleBlock: 1,
    inputNameVisible: true,
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
