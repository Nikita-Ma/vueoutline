<template>
  <div class="app">
<!--    <HelloWorld :title="'value'" v-on="onChangeCounter" @onChangeCounter="cutEvent"/>-->
    <HelloWorld :user-object="{name: 'Denis'}"
                :title="'123'"
                :qwe-qwe="{qq: 123}"
                @onChangeCounter="cutEvent"/>
    <h2>V model</h2>
    <input aria-label="text" v-model="text" type="text" >
    <i>{{text}}</i>
    <div class="checkbox">
      <input aria-label="checkbox" type="checkbox" v-model="state">
      <h3>Checkbox {{state}}</h3>
    </div>
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
    text: 'Default text',
    state: false,
    activeClass: 'my-active-class',
    isActive: 'true',
    title: 'some title'
  }),
  methods: {
    cutEvent(value) {
      console.log('Cust Event', value);
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
