<template>
  <div class="demo">
    {{n}}
    <button @click="add">Click me to add one</button>
    <img src="../assets/logo.png" alt="logo">
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0
    };
  },
  methods: {
    add() {
      this.n += 1;
    }
  }
};
</script>

<style scoped>
.demo{
    color:blue;
}
</style>