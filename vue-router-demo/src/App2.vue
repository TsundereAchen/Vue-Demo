<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <router-link to="/Home">首页</router-link>
    <router-link to="/Movie/1">电影1</router-link>
    <router-link to="/Movie/2">电影2</router-link>
    <router-link to="/About">关于</router-link>
    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
