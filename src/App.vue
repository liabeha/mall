<template>
  <div id="app">
    <router-view/>    <!--渲染路由里的组件-->
    <main-tab-bar/>    <!--使用组件-->
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
