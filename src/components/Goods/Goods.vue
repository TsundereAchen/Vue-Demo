<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox" class="custom-control-input" :id="id" :checked="status" @change="onChange" />
        <label class="custom-control-label" for="cb1">
          <!-- 商品的缩略图 -->
          <img :src="img" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
      </div>
    </div>
    <!-- count组件 -->
    <slot name="obj"></slot>
  </div>
</template>

<script>
export default {
  name: "Goods",
  props: {
    id: {
      type: Number,
      Infinity: true
    },
    title: {
      type: String,
    },
    price: {
      type: Number
    },
    count: {
      type: Number
    },
    img: {
      type: String
    },
    status: {
      type: Boolean
    }
  },
  methods: {
    onChange(e) {
      this.$emit("onChange", {state: e.target.checked,id: this.id})
    }
  },
  computed: {
  
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
