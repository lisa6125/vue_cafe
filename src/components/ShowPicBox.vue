<template>
  <div id="showPicBox" v-show="showPic.status">
    <div class="picItem" @click="changePic">
      <img :src="imgList[showPic.openPic].src" alt="">
    </div>
    <div class="closeBtn" @click="showPic.status = false">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  props:["showPic","imgList"],
  methods:{
    changePic(){
      this.$emit("changePic")
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
  #showPicBox{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    .picItem{
      width: 600px;
      height: 600px;
      cursor: pointer;
      @extend %position-center;
      @include pad{
        width: 80%;
      }
      img{
        @extend %img-contain;
      }
    }
    .closeBtn{
      position: absolute;
      top: 30px;
      right: 60px;
      font-size: 36px;
      color: rgb(180, 180, 180);
      transition: 0.1s ease-in-out all;
      cursor: pointer;
      @include pad{
        top: 10px;
        right: 20px;
      }
      :hover{
        color: rgb(255, 255, 255);
        transition: 0.1s ease-in-out all;
      }
    }
  }
</style>