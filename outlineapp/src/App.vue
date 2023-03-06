<template>
  <div class="app">
    <h1 :class="{'exampleClass': isActive}" :style="{'font-size': 12 + 'px' }">Hi there</h1>
    <h1 :class="{'exampleClass': isActive}" :style="{'font-size': 12 + 'px' }">Hi there</h1>
    <h1 :class="classObject">Hi there</h1>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
    // null
  },
  data: () => ({
    activeClass: 'my-active-class',
    isActive: 'true',
  }),
  computed: {
    classObject () {
      return {
        'exampleClass' : this.isActive,
        'error' : !this.isActive
      }
    }
  }
}
</script>

<style>

</style>
