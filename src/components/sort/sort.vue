<template>
  <div class="sort">
    <div class="search">
      <div class="search-box">
        <i class="icon"></i>
        <span class="text">丙二醇</span>
      </div>
      <div class="info">
        <i class="icon"></i>
      </div>
    </div>
    <div class="body-wrapper">
      <scroll class="left-tab" :data="tabLists">
        <ul>
          <li class="tab-list" v-for="list in tabLists">
            <a href="#">{{list.title}}</a>
          </li>
        </ul>
      </scroll>
      <scroll class="right-content" :data="rightLists">
         <ul>
           <li class="goods-list" v-for="list in rightLists">
             <div class="img-wrapper">
               <img src="" alt="">
             </div>
             <div class="good-info">
               <p class="good-name" v-html="list.title"></p>
               <p class="price">￥<span class="price-sign" v-html="list.price"></span>/kg</p>
             </div>
           </li>
         </ul>
      </scroll>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Scroll from 'base/scroll/scroll'
const ERR_OK = 1
export default{
  components: {
    Scroll
  },
  data () {
    return {
      tabLists: [],
      rightLists: []
    }
  },
  created () {
    this._getLeftTabs()
    this._getRightLists()
  },
  methods: {
    _getLeftTabs () {
      axios.get('api/api.php/mall/get_brand_v1')
      .then((res) => {
        if (res.data.status === ERR_OK) {
          this.tabLists = res.data.brand.slice(0, 15)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    _getRightLists () {
      axios.get('api/api.php/mall/get_index_v1',
        {params: {
          'brand_id': 70,
          'category_id': 19,
          'sort': 'price ASC',
          'pagesize': 10,
          'p': 1
        }
        }).then((res) => {
          if (res.data.status === ERR_OK) {
            this.rightLists = res.data.list.slice(0, 20)
          }
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.sort{
  padding: 44px 0 50px 0;
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
  .body-wrapper{
    display: flex;
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
    .left-tab{
      flex: 0 0 80px;
      background: #fff;
      .tab-list{
        height: 45px;
        line-height: 45px;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 14px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:1;
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
        &:last-child{
          border-bottom: none;
        }
        a{
          display: block;
        }
        &.currentIndex{
          background: #eee;
        }
      }
    }
    .right-content{
      flex: 1;
      margin: 5px 0 5px 5px;
      overflow: hidden;
      background: #fff;
      .goods-list{
        display: flex;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #e4e1e1;
        height: 100px;
        &:last-child{
          border-bottom: none;
        }
        .img-wrapper{
          width: 80px;
          height: 80px;
          margin-right: 20px;
          background: #666;
        }
        .good-info{
          .good-name{
            font-size: 14px;
            margin-bottom: 10px;
          }
          .price{
            font-size: 12px;
            color: #ea4f63;
            .price-sign{
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
