<template>
  {{text}}
  <!--<button @click="inputNameVisible = !inputNameVisible">Change form</button>-->
  <button @click="onClick('some value', $event)">Change form</button>
  <button @click.right="onClick('some value', $event)">Change form</button>
  <!--event - it's event :DD -->
  <a href="/" @click.prevent="onClick('some value', $event)">Change form</a>
  <!--  no restart event reloading (e.preventDefault)-->
    <input aria-label="test" type="text" @keyup="onKeyApp($event)">
    <input aria-label="test" type="text" @keyup.enter="onKeyApp('Enter',$event)">

</template>
<script>

export default {
  name: 'App',
  components: {
    // null
  },
  data: () => ({
    text: ''
  //   firstName: 'Nik',
  //   num: 2,
  //   obj: {
  //     age: 19,
  //   },
  //   linkUrl: 'https://google.com',
  //   someUrl: 'https://google.com',
  //   atrKey: 'href',
  //   msgIsVisible: 1,
  //   isVisibleBlock: 1,
  //   inputNameVisible: true,
  }),
  // save any methods, which we want use in component
  methods: {
    onClick(value, e) {
      console.log(value, e);
    },
    onKeyApp(enterEvent, e) {
      console.log(enterEvent, e);
      // Take this.nameComponents = anyValue
      this.text = e.target.value;
    }
  }
};
</script>

<style>

</style>
