<template>
  <div id="app">
    <div id="MainContainer">
      <Nav/>
      <transition name="fade">
        <router-view/>
      </transition>
      <Bottom :showPic="showPic" :imgList="imgList"/>
      <ShowPicBox :showPic="showPic" :imgList="imgList" @changePic="changePic"/>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import ShowPicBox from "./components/ShowPicBox.vue"
import Bottom from "./components/Bottom.vue"
export default {
  name: 'app',
  components: {
    Nav,
    ShowPicBox,
    Bottom
  },
  data() {
    return {
        showPic:{
          status:false,
          openPic:0
        },
        imgList:[
          {src:require('./assets/img/dessert3.jpg')},
          {src:require('./assets/img/dessert4.jpg')},
          {src:require('./assets/img/dessert5.jpg')},
          {src:require('./assets/img/dessert2.jpg')},
          {src:require('./assets/img/dessert1.jpg')},
          {src:require('./assets/img/dessert6.jpg')},
        ]
      }
  },
  methods:{
    changePic(){
      if(this.showPic.openPic === (this.imgList.length-1)){
        this.showPic.openPic = 0
      }else{
        this.showPic.openPic = (this.showPic.openPic + 1) %(this.imgList.length+1)
      }
    }
  },
}
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";
*{
  box-sizing: border-box;
}
#app{
  background:  url('~@/assets/img/bg.png');
  background-size: contain;
  width: 100%;
  height: 100%;
  padding: 10px 0;
}
#MainContainer{
  width: 100%;
  max-width: 1200px;
  background: #fff;
  margin: 15px auto;
  color: $mainDarkBrown;
  font-family: 'Cormorant', serif;
  box-shadow: 0 0 30px 1px $bgShadow;
}
.fade-enter-active,.fade-leave-active {
  transition: all .5s ease-in-out;
}
.fade-enter-to,.fade-leave-from {
  opacity: 1;
}
.fade-enter,.fade-leave-to {
  opacity: 0;
}

</style>
