<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
  </div>
</template>

<script>

// import Vue from 'vue'
import MHeader from './components/header/header.vue'
import MTab from './components/tab/tab.vue'
   export default {
      components: {
        MHeader,
        MTab
      }
    }
</script>

<style>
html,body{
height: 100%;
background: #000;
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background: #000;
}
*{
  margin: 0 !important;
  font-size:0.3rem; 
}
ul{
  list-style: none;
}
li{
  list-style: none;
}
</style>
