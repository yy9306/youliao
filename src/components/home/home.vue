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
        <img src="./box.png" alt="" width="23" height="25">
        <p class="text">现货</p>
      </div>
      <div class="tab-item">
        <img src="./first-buy.png" alt="" width="23" height="25">
        <p class="text">抢购</p>
      </div>
      <div class="tab-item">
        <img src="./detail.png" alt="" width="22" height="24">
        <p class="text">我的订单</p>
      </div>
      <div class="tab-item">
        <img src="./love.png" alt="" width="25" height="23">
        <p class="text">我的关注</p>
      </div>
    </div>
    <div class="first-buy">
       <div class="l">
         <img src="./z-info.png" alt="" width="25" height="20">
         <span class="text">有料逢二必抢|扬巴N.N-二甲基乙醇胺！···</span>
       </div>
       <div class="r">
          <a href="#">更多</a>
       </div>
    </div>
    <div class="recommend">
       <div class="recommend-wrapper">
          <ul>
            <li class="good-lists" v-for="(item, index) in HomePages.recommend">
              <div class="header-img" :class="[titleNum(index+1)]"></div>
              <div class="content-wrapper">
                <ul>
                  <li class="good-list" v-for="(good, index) in goods(item)">
                    <div class="img-wrapper">
                      <img src="" alt="" width="90" height="90">
                    </div>
                    <p class="desc">{{good.title}}</p>
                    <p class="text"><span class="sign-red">￥</span><span class="price sign-red">{{good.price}}</span>/kg</p>
                  </li>
                  <a href="#" class="more">查看更多</a>
                </ul>
              </div>
            </li>
          </ul>
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
    titleNum (index) {
      return `title${index}`
    },
    goods (item) {
      return item.goods.slice(0, 6)
    },
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
    padding-bottom: 50px;
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
        font-size: 12px;
        color: #595959;
        img{
          margin: 5px 0;
        }
      }
    }
    .first-buy{
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin: 20px 0;
      height: 45px;
      line-height: 45px;
      font-size: 12px;
      color: #6c6c6c;
      background: #fff;
      .l{
        flex: 2;
        img{
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .r{
        flex: 0 0 35px;
        text-align: right;
        line-height: 28px;
        border-left: 1px solid #9e9d9d;
      }
    }
    .recommend{
      .recommend-wrapper{
        background: #fff;
         .good-lists{
           .header-img{
             height: 70px;
             &.title1{
               background: url('./title1.png') no-repeat;
               background-size: 100% 100%;
             }
             &.title2{
               background: url('./title2.png') no-repeat;
               background-size: 100% 100%;
             }
             &.title3{
               background: url('./title3.png') no-repeat;
               background-size: 100% 100%;
             }
             &.title4{
               background: url('./title4.png') no-repeat;
               background-size: 100% 100%;
             }
             &.title5{
               background: url('./title5.png') no-repeat;
               background-size: 100% 100%;
             }
             &.title6{
               background: url('./title6.png') no-repeat;
               background-size: 100% 100%;
             }
             &.title7{
               background: url('./title7.png') no-repeat;
               background-size: 100% 100%;
             }
           }
           .content-wrapper{
             font-size: 12px;
              ul{
                display: flex;
                flex-wrap: wrap;
                .good-list{
                  flex: 1 0 33.3%;
                  padding: 10px;
                  box-sizing: border-box;
                  .img-wrapper{
                    width: 90px;
                    height: 90px;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    background: #666;
                  }
                  .text{
                    margin-top: 5px;
                    color: #ea4f63;
                    font-size: 10px;
                    .price{
                      font-size: 12px;
                      font-weight: bold;
                    }
                  }
                  .desc{
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:1;
                  }
                }
              }
              .more{
                display: block;
                margin: 10px auto;
                font-size: 12px;
                color: #6c6c6c;
              }
           }
         }
      }
    }
  }
</style>
