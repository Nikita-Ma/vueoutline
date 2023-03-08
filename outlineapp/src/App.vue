<template>
  <div class="app">
    <h1 :class="classObject">Hi there</h1>
    <HelloWorld v-on="onChangeCounter" @onChangeCounter="onChangeCounter"/>
  </div>
</template>
<script>

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
    // null
  },
  data: () => ({
    activeClass: 'my-active-class',
    isActive: 'true',
  }),
  methods: {
    onChangeCounter(value) {
      console.log('In App Vue value', value);
    }
  },
  computed: {
    classObject() {
      return {
        exampleClass: this.isActive,
        error: !this.isActive
      };
    }
  }
};
</script>

<style>

</style>
