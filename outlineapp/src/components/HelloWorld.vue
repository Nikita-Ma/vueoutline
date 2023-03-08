<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button @click="onClick">Send Event</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Def title'
    },
    userCamelCase: {
      type: Object,
      required: true,
      default: () => ({}), // important work with Object
      validator(value) { // validate / check data props
        console.log(value);
        return value.name;
      }
    },
  },
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
