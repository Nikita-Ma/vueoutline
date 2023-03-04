<template>
  <div class="app">
    <h1>Hello {{ firstName }}{{ lastName }}</h1>
    <input aria-label="text" type="text" @keyup.enter="setName"/>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
    // null
  },
  data: () => ({
    colors: ['orange', 'yellow', 'black'],
    product: {
      brand: 'Apple',
      model: 'Maxintoshi',
      price: 'Free'
    },
    firstName: 'Nik',
    num: 2,
  }),
  computed: {
    fullName() {
      return `${this.firstName || 'Default'}`;
    },
    onLastNameUpdate(value) {
      console.log(value);
    },
  },
  watch: {
    lastName: 'onLastNameUpdate'
  },
  // save any methods, which we want use in component
  methods: {
    setName(e) {
      this.firstName = e.target.value;
    }
  }
};
</script>

<style>

</style>
