<template>
<div id="home">
  <Nav/>
  <Banner/>
  <div id="mainContent">
    <transition name="fade">
      <router-view/>
    </transition>
    <div class="block4">
      <div class="block4_useful_links">
        <div class="title">USEFUL LINKS</div>
        <div class="links-box">
          <ul>
            <li class="links">dgffnbjy</li>
            <li class="links">vdfnbjy</li>
            <li class="links">hgvfnb</li>
            <li class="links">vdbfnjyb</li>
            <li class="links">gzsedb</li>
          </ul>
          <ul>
            <li class="links">dgfgfdsfnbjy</li>
            <li class="links">fsvdbfnjyb</li>
            <li class="links">gzsedbfd</li>
          </ul>
        </div>
      </div>
      <div class="block4_mission">
        <div class="block4 menu_picbox">
          <div class="pic" v-for="items,idx in imgList" :key="idx" @click="showPic.status = true,showPic.openPic">
            <img :src="items.src" alt="">
          </div>
        </div>
        <div class="block4 menu_descript">
          <div class="title">MISSION</div>
          <div class="descript">Duis pulvinar sollicitudin ultrices. In maximus convallis facilisis! Cras placerat justo sapien, a condimentum lacus interdum ut. Curabitur dignissim pharetra nisl, vitae condimentum ligula. In ac sagittis nunc. Aenean pretium suscipit ligula ac porttitor. Vivamus venenatis mi non ligula.</div>
        </div>
      </div>
    </div>
    <div class="footer">
      © 2021 lisa6125 | All Rights Reserved | 僅用於練習
    </div>
  </div>
  <div id="showPicBox" v-show="showPic.status">
    <div class="picItem" @click="changePic">
      <img :src="imgList[showPic.openPic].src" alt="">
    </div>
    <div class="closeBtn" @click="showPic.status = false">
      <i class="fas fa-times"></i>
    </div>
  </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Nav from "../components/Nav.vue"
import Banner from "../components/Banner.vue"
import Main from "../components/Main.vue"
export default {
  components: {
    Swiper,
    SwiperSlide,
    Nav,
    Banner,
    Main
  },
  name: 'Home',
  data() {
    return {
        swiperOptionbanner: {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          autoplay: {
            disableOnInteraction: true,
            delay:3000
          }
        },
        showPic:{
          status:false,
          openPic:0
        },
        imgList:[
          {src:require('../assets/img/dessert3.jpg')},
          {src:require('../assets/img/dessert4.jpg')},
          {src:require('../assets/img/dessert5.jpg')},
          {src:require('../assets/img/dessert2.jpg')},
          {src:require('../assets/img/dessert1.jpg')},
          {src:require('../assets/img/dessert6.jpg')},
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
@import "../assets/scss/_variables.scss";
#home{
  width: 100%;
  max-width: 1200px;
  background: #fff;
  margin: 15px auto;
}

#banner{
  padding: 20px;
}
#mainContent{
  color: $mainDarkBrown;
  font-family: 'Cormorant', serif;
  .block1{
    border-bottom: 1px solid $mainFontColor-o1;
    &_descript{
      margin: 0 auto;
      width: 400px;
      margin-top: 20px;
    }
    &_cards{
      margin-top: 70px;
      padding: 0 20px;
      @extend %flex-center;
      &_items{
        width: 25%;
        padding: 20px;
        .icon{
          text-align: center;
        }
        .title{
          text-align: center;
          font-weight: 900;
          font-size: 24px;
          margin-top: 10px;
        }
        .descript{
          margin-top: 20px;
        }
      }
    }
  }
  .block2{
    padding: 50px;
    border-bottom: 1px solid $mainFontColor-o1;
    @extend %flex-center;
    >div{
      width: 50%;
    }
    &_descript{
      margin-top: 10px;
    }
  }
  .block3{
    width: 100%;
    &_picView{
      width: calc(100% - 40px);
      height: 400px;
      position: relative;
      margin: 20px;
      overflow: hidden;
      &_content{
        position: absolute;
        background: rgba(255, 255, 255, 0.637);
        backdrop-filter:blur(8px);
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        @extend %flex-column;
        &_title{
          width: 500px;
          font-size: 36px;
          font-weight: 900;
          letter-spacing: 2px;
          font-family: 'Cormorant', serif;
          text-align: center;
          margin: 0 auto;
          margin-top: 10px;
        }
        &_icon{
          text-align: center;
          margin: 20px auto;
          img{
            height: 50px;
          }
        }
      }
      >img{
        position: absolute;
        top: -20%;
        left: 0;
        width: 100%;
      }
    }
    &_descript{
      width: 400px;
      margin: 0 auto;
    }
    &_title{
      font-size: 18px;
      font-weight: 900;
      letter-spacing: 2px;
      font-family: 'Cormorant', serif;
      text-align: center;
      margin-top: 10px;
    }
    &_content{
      margin-top: 50px;
    }
  }
  .block4{
    @extend %flex-center;
    background: $mainLightBrown;
    padding: 20px;
    font-weight: 900;
    >div{
      width: 50%;
    }
    &_useful_links{
      padding: 20px;
    }
    .title{
      font-size: 18px;
      text-align: left;
    }
    .links-box{
      display: flex;
      padding: 10px 20px;
      ul{
        height: 200px;
        width: 50%;
        margin: 0;
        .links{
          list-style: circle;
          width: 50%;
          margin: 10px 0;
        }
      }
    }
    &_mission{
      @extend %flex-center;
      .menu{
        &_picbox{
          padding: 0;
          @extend %flex-center;
          .pic{
            padding: 2px;
            width: 33.33%;
            height: 100px;
            overflow: hidden;
            cursor: pointer;
            img{
              @extend %img-cover;
            }
          }
        }
        &_descript{
          display: block;
          .descript{
            line-height: 1.2;
            font-weight: 500;
            width: 100%;
            margin-top: 20px;
          }
        }
      }
      >div{
        width: 50%;
      }
    }
  }
  .footer{
    background: $mainFooterBrown;
    padding: 30px;
    text-align: center;
    color: #fff;
    border-radius:0 0 5px 5px;
  }
  .descript{
    text-align: center;
  }
  .subtitle{
    font-size: 32px;
    letter-spacing: 2px;
    font-family: 'Parisienne', cursive;
    text-align: center;
    margin-top: 50px;
  }
  .icon{
    text-align: center;
    margin: 20px auto;
    img{
      height: 30px;
    }
  }
  .title{
    font-size: 48px;
    font-weight: 900;
    letter-spacing: 2px;
    font-family: 'Cormorant', serif;
    text-align: center;
    margin-top: 10px;
  }
  .btn{
    color: $mainDarkBrown;
    font-family: 'Cormorant', serif;
    border-radius: 5px;
    margin: 0 auto;
    padding: 50px;
    text-align: center;
    span{
      padding: 10px 20px;
      border: 1px solid $mainDarkBrown;
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      &:hover{
        background: $mainFontColor;
        color: $mainLightBrown;
        transition: 0.3s ease-in-out all;
      }
    }
  }
}
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
      :hover{
        color: rgb(255, 255, 255);
        transition: 0.1s ease-in-out all;
      }
    }
  }
</style>
