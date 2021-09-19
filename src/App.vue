<template>
  <div class="app-container">
    <Header title="购物车实例"></Header>
    <Goods  v-for="item in list" :key="item.id" :title="item.goods_name" :price="item.goods_price" :count="item.goods_count" :id="item.id" :img="item.goods_img"
      :status="item.goods_state" @onChange="onChange">
          <template v-slot:obj>
            <Counter :count="item.goods_count" @reduceCount="changeCount(item, $event)" @addCount="changeCount(item, $event)"></Counter>
          </template>
      </Goods>
    <Footer :allState="fullStatus" :allCount="getAllCount" :allNum="getNum" @selectCheck="selectCheck"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Goods from './components/Goods/Goods.vue'
import Footer from './components/Footer/Footer'
import Counter from './components/Counter/Counter.vue'
import axios from 'axios'
export default {
  created() {
    this.initCarList() 
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    async initCarList() {
      const {data:res} = await axios.get("https://www.escook.cn/api/cart")
      this.list = res.list
    },
    onChange(e) {
      this.list.some(item=>{
        if(item.id == e.id) {
          item.goods_state = e.state;
          return true;
        }
      })
    },
    selectCheck(e) {
      this.list.forEach(item=>{
        item.goods_state = e
      })
    },
    changeCount(e, val) {
      e.goods_count = val
    }
  },
  computed: {
    getAllCount() {
      let count = 0
      const arr = this.list.filter(a=>a.goods_state)
      arr.forEach((item)=> {
        count+=item.goods_count*item.goods_price;
      })
      return count;
    }, 
    fullStatus() {
      const s= this.list.every(a=>a.goods_state);
      return s
    },
    getNum() {
      let num = 0;
      const arr = this.list.filter(a=>a.goods_state)
      arr.forEach(item=> {
        num += item.goods_count
      })
      return num;
    }
  },
  components: {
    Header,
    Goods,
    Footer,
    Counter
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
