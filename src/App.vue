<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(0)
function add () {
  num.value++
}
function reduce () {
  num.value--
}
</script>

<template>
  <div id="app">
    <div>
      <span>{{ num }}</span>
      <span @click="add">+</span>
      <span @click="reduce">-</span>
      </div>
    <img src="./assets/images/test.png" alt="">
  </div>
</template>

<style scoped lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
  }
}
</style>
