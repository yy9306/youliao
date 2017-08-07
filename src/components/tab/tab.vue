<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/">
      <div class="tab-link">
        <span class="home-img"></span>
        <p>首页</p>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/sort">
      <div class="tab-link">
        <span class="sort-img"></span>
        <p>分类</p>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/consult">
      <div class="tab-link">
        <span class="zx-img"></span>
        <p>咨询</p>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/cart">
      <div class="tab-link">
        <span class="cart-img"></span>
        <p>购物车</p>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/me">
      <div class="tab-link">
        <span class="me-img"></span>
        <p>我的</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default{}
</script>

<style lang="scss" scoped>
  .tab{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    line-height: 50px;
    color: #888;
    font-size: 10px;
    background: #f8f8f8;
    .tab-item{
      flex: 1;
      text-align: center;
      .tab-link{
        span{
          display: block;
          margin: 7px auto;
          width: 21px;
          height: 21px;
          &.home-img{
            width: 24px;
            height: 21px;
            background: url('./home.png') no-repeat;
            background-size: 24px 21px;
          }
          &.sort-img{
            background: url('./sort.png') no-repeat;
            background-size: 21px 21px;
          }
          &.zx-img{
            background: url('./zx.png') no-repeat;
            background-size: 21px 21px;
          }
          &.cart-img{
            background: url('./cart.png') no-repeat;
            background-size: 21px 21px;
          }
          &.me-img{
            width: 17px;
            height: 19px;
            background: url('./me.png') no-repeat;
            background-size: 17px 19px;
          }
        }
        p{
          line-height: 10px;
        }
      }
    }
  }
</style>
