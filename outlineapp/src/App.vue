<template>
  <!--  {{ text }}-->
  <!--  <button @click="onClick('some value', $event)">Change form</button>-->
  <!--  <button @click.right="onClick('some value', $event)">Change form</button>-->
  <!--  &lt;!&ndash;event - it's event :DD &ndash;&gt;-->
  <!--  <a href="/" @click.prevent="onClick('some value', $event)">Change form</a>-->
  <!--  &lt;!&ndash;  no restart event reloading (e.preventDefault)&ndash;&gt;-->
  <!--  <input aria-label="test" type="text" @keyup="onKeyApp($event)">-->
  <!--  <input aria-label="test" type="text" @keyup.enter="onKeyApp('Enter',$event)">-->
  <!--  <ul>-->
  <!--    <li v-for="(color, index) in colors" :key="color">-->
  <!--      {{ index }}-{{ color }}-->
  <!--    </li>-->
  <!--  </ul>-->
  <ul>
    <li v-for="color in colors" :key="color">{{ color }}</li>
    <li v-for="(user) in users" :key="user.name">{{ user.name }}, {{ user.age }}</li>
    <li v-for="(value, nameKey, index) in product" :key="index">
      {{ index }}-{{ nameKey }}:{{ value }}
    </li>
    <input aria-label="test" type="text" @keyup.enter="addNewColor">
    <input aria-label="test" type="text" @keyup.enter="delProp">
  </ul>
</template>
<script>

export default {
  name: 'App',
  components: {
    // null
  },
  data: () => ({
    colors: ['orange', 'yellow', 'black'],
    users: [{ name: 'Denis', age: 22 }, { name: 'Nik', age: 19 }],
    product: {
      brand: 'Apple',
      model: 'Maxintoshi',
      price: 'Free'
    }
    // text: ''
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
    },
    addNewColor(e) {
      this.colors.push(e.target.value);
      // where aim | index | what write
      // for object usually
      this.$set(this.colors, this.colors.length, e.target.value);
    },
    delProp(e) {
      // delete this.product[e.target.value];
      this.$delete(this.product, e.target.value);
    }
  }
};
</script>

<style>

</style>
