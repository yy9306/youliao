<template>
  <transition name="slide">
    <scroll class="info-detail" :data="infoDetails">
      <div class="" v-html="infoDetails.content"></div>
    </scroll>
  </transition>
</template>

<script>
import Scroll from 'base/scroll/scroll'
export default{
  components: {
    Scroll
  },
  props: {
    infoDetails: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.info-detail{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 20px;
  background: #fff;
}
.slide-enter-active, .slide-leave-active{
  transition: all 0.3s
}
.slide-enter, .slide-leave-to{
  transform: translate3d(100%, 0, 0)
}
</style>
