<template>
  <div class="hello">
    <button @click="onClick">Send Event</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    counter: 0
  }),
  methods: {
    onClick() {
      this.counter += 1;
      this.$emit('onChangeCounter', this.counter);
      console.log('Click');
    }
  }
};
</script>

<style scoped>

</style>
