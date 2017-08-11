<template>
  <div class="consult">
     <div class="title"><span>资讯</span></div>
     <scroll class="content-lists" :data="consults">
       <ul>
         <li class="consult-list" v-for="info in consults" @click="selectItem(info)">
           <div class="left-desc">
             <h2 class="desc" v-html="info.title"></h2>
             <div class="brand">
               <div class="brand-name">
                 <i class="icon"></i>
                 <span class="text">有料网</span>
               </div>
               <div class="time">
                 <i class="icon"></i>
                  <span class="text" v-html="info.update_time"></span>
               </div>
             </div>
           </div>
           <div class="Img">
             <img src="" alt="">
           </div>
         </li>
       </ul>
     </scroll>
     <router-view :infoDetails="infoDetails"></router-view>
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
      consults: [],
      infoDetails: []
    }
  },
  created () {
    this._getInfo()
  },
  methods: {
    selectItem (info) {
      this.$router.push({
        path: `/consult/${info.id}`
      })
      this.getInfoDetail(info)
    },
    _getInfo () {
      axios.get('api/api.php/info/get_index_v1')
      .then((res) => {
        if (res.data.status === ERR_OK) {
          this.consults = res.data.list
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    getInfoDetail (info) {
      axios.get('api/api.php/info/get_detail_v1', {
        params: {
          'id': info.id
        }
      })
      .then((res) => {
        if (res.data.status === ERR_OK) {
          this.infoDetails = res.data.detail
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .consult{
    .title{
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      height: 44px;
      text-align: center;
      border-bottom: 1px solid #dad5d5;
      background: #fff;
      font-size: 16px;
      span{
        flex: 1;
      }
    }
    .content-lists{
      position: absolute;
      top: 44px;
      bottom: 50px;
      left: 0;
      right: 0;
      overflow: hidden;
      .consult-list{
        display: flex;
        padding: 15px;
        font-size: 14px;
        border-bottom: 1px solid #dad5d5;
        background: #fff;
        cursor: pointer;
        &:last-child{
          border-bottom: none;
        }
        .left-desc{
          flex: 1;
          position: relative;
          padding-right: 10px;
          .desc{
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
          }
          .brand{
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            width: 100%;
            font-size: 12px;
            .brand-name{
              .icon{
                display: inline-block;
                vertical-align: middle;
                width: 9px;
                height: 9px;
                background: url('./origin.png') no-repeat;
                background-size: 9px 9px;
              }
            }
            .time{
              margin-right: 10px;
            }
          }
        }
        .Img{
          flex: 0 0 78px;
          height: 62px;
          width: 78px;
          background: #666;
        }
      }
    }
  }
</style>
