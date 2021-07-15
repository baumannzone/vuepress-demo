<template>
  <p class="demo">
    <button @click="incrementCounter">Increment Counter</button>
    <button @click="clearCounter">Clear Counter</button>
    <br />
    <span>Counter: {{ counter }}</span>
    <br />
    <span>This is another component</span>
  </p>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    clearCounter() {
      this.counter = 0;
    },
  },
};
</script>
