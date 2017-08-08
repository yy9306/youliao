<template>
  <div class="home">
    <div class="search">
      <div class="search-box">
        <i class="icon"></i>
        <span class="text">丙二醇</span>
      </div>
      <div class="info">
        <i class="icon"></i>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="item in HomePages.banner">
                <a :href="item.url">
                  <img class="needsclick" :src="item.image">
                </a>
              </div>
            </slider>
          </div>
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-item">
        <span class="img"></span>
        <p class="text">现货</p>
      </div>
      <div class="tab-item">
        <span class="img"></span>
        <p class="text">抢购</p>
      </div>
      <div class="tab-item">
        <span class="img"></span>
        <p class="text">我的订单</p>
      </div>
      <div class="tab-item">
        <span class="img"></span>
        <p class="text">我的关注</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Slider from 'base/slider/slider'
export default{
  components: {
    Slider
  },
  data () {
    return {
      HomePages: []
    }
  },
  created () {
    this._getHomePage()
  },
  methods: {
    _getHomePage () {
      axios.get('api/api.php/index/get_index_data_v1')
      .then((response) => {
        this.HomePages = response.data.list
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    .search{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      padding: 0 10px;
      box-sizing: border-box;
      height: 44px;
      .search-box{
        width: 270px;
        height: 34px;
        margin-top: 5px;
        line-height: 34px;
        padding: 0 20px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.8);
        .icon{
          display: inline-block;
          width: 15px;
          height: 15px;
          background: url('./search.png') no-repeat;
          background-size: 15px 15px;
        }
        .text{
          font-size: 14px;
          color: #aaa;
        }
      }
      .info{
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 100%;
        text-align: center;
        font-size: 10px;
        color: #666;
        .icon{
          display: block;
          width: 19px;
          height: 19px;
          margin: 0 auto;
          margin-top: 10px;
          background: url('./info.png') no-repeat;
          background-size: 19px 19px;
        }
        .text{
          line-height: 10px;
        }
      }
    }
    .content-wrapper{
      .slider-wrapper{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;
        background: red;
        .slider-content{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
    .tab-content{
      display: flex;
      width: 100%;
      height: 55px;
      background: #fff;
      .tab-item{
        flex: 1;
        text-align: center;
      }
    }
  }
</style>
