<template>
  <div class="movie-container">
    <h3>Movie 组件 --{{id}}</h3>
    <hr/>
    <button @click="goto">点我返回首页</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['id'],
  methods: {
    goto() {
      this.$router.push('/Home')
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
