<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <router-link to="/Home/Tab1">tab1</router-link>
    <router-link to="/Home/Tab2">tab2</router-link>
    <hr/>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
