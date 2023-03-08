<template>
  <div class="app">
<!--    <HelloWorld :title="'value'" v-on="onChangeCounter" @onChangeCounter="cutEvent"/>-->
    <HelloWorld :user-object="{name: 'Denis'}"
                :title="'123'"
                :qwe-qwe="{qq: 123}"
                @onChangeCounter="cutEvent"/>
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
