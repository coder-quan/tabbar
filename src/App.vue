<template>
  <div id="app">
    <!--    显示内容-->
    <router-view></router-view>
    <!--    底部tab栏-->
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<style>
  @import "./assets/css/base.css";
</style>
<script>
import MainTabBar from './components/MainTabBar'
  export default {
    name:"App",
    components: {
      MainTabBar
    }
  }
</script>