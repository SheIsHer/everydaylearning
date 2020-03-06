<template>
  <div id="app">
    <router-link to='/calendar'>
    进入</router-link>
    <router-link to='/'>返回</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
h1 {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
#app {
  text-align: center;
  color: #1ac5db;
}


</style>
