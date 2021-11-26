<template>
<div id="home">
  <div id="nav">
    <div class="logo">
      <img src="../assets/icons/logo.png" alt="">
      <div class="logo_name">
        CAFFEE HOUSE
      </div>
    </div>
    <div class="pagesLink">
      <div class="pagesLink_item">Home</div>
      <div class="pagesLink_item">Menu</div>
      <div class="pagesLink_item">Tradition</div>
      <div class="pagesLink_item">Gallery</div>
      <div class="pagesLink_item">Local</div>
    </div>
  </div>
  <div id="banner">
    <swiper class="swiper" :options="swiperOptionbanner">
      <swiper-slide>
        <img src="@/assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/banner2.png" alt="">
      </swiper-slide>
    </swiper>
  </div>
  <div id="mainContent">
    <div class="block1">
      <div class="block1_subtitle subtitle">Welcome to</div>
      <div class="block1_title title">CAFFEE HOUSE</div>
      <div class="block1_descript descript">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
Morbi accuam nectellus</div>
      <div class="block1_cards">
        <div class="block1_cards_items">
          <div class="icon">
            <img src="../assets/icons/icon1.png" alt="">
          </div>
          <div class="title">
            HANDMADE
          </div>
          <div class="descript">
            Suspendisse vestibulum mi libero, sed rhoncus turpis rhoncus id. Praesent viverra risus in dui varius luctus! Aenean placerat libero odio, at elementum posuere.
          </div>
        </div>
        <div class="block1_cards_items">
          <div class="icon">
            <img src="../assets/icons/icon2.png" alt="">
          </div>
          <div class="title">FRESH & SWEET</div>
          <div class="descript">Nullam id dolor id erat imperdiet scelerisque nec in nisi. Aliquam erat volutpat. Maecenas viverra velit non ipsum venenatis, et congue erat suscipit cras amet.</div>
        </div>
        <div class="block1_cards_items">
          <div class="icon">
            <img src="../assets/icons/icon3.png" alt="">
          </div>
          <div class="title">TRADITIONAL</div>
          <div class="descript">Suspendisse vestibulum mi libero, sed rhoncus turpis rhoncus id. Praesent viverra risus in dui varius luctus! Aenean placerat libero odio, at elementum posuere.</div>
        </div>
        <div class="block1_cards_items">
          <div class="icon">
            <img src="../assets/icons/icon4.png" alt="">
          </div>
          <div class="title">MADE WITH LOVE</div>
          <div class="descript">Suspendisse vestibulum mi libero, sed rhoncus turpis rhoncus id. Praesent viverra risus in dui varius luctus! Aenean placerat libero odio, at elementum posuere.</div>
        </div>
      </div>
      <div class="btn">
        <span>SEE WHERE WE ARE</span>
      </div>
    </div>
    <div class="block2">
      <div class="block2_pic">
        <img src="../assets/img/home_cafe_person.png" alt="">
      </div>
      <div class="block2_content">
        <div class="block2_subtitle subtitle">Original</div>
        <div class="block2_title title">TRADITION</div>
        <div class="block2_icon icon">
          <img src="../assets/icons/dove.png" alt="">
        </div>
        <div class="block2_descript descript">Donec blandit mauris aliquet felis sagittis, non imperdiet dolor volutpat. Etiam iaculis felis metus, vel tristique enim sodales non. In vitae mi a nunc nullam.</div>
        <div class="block2_descript descript">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudi, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</div>
        <div class="btn">
          <span>SEE WHERE WE ARE</span>
        </div>
      </div>
    </div>
    <div class="block3">
      <div class="block3_content">
          <div class="block3_title">OUR CUSTOMERS LOVE US</div>
          <div class="block3_icon icon">
            <img src="../assets/icons/feather2.png" alt="">
          </div>
          <div class="block3_descript descript">Donec blandit mauris aliquet felis sagittis, non imperdiet dolor volutpat. Etiam iaculis felis metus, vel tristique enim sodales non. In vitae mi a nunc nullam.</div>
          <div class="block3_subtitle subtitle">Ash Curtis</div>
      </div>
      <div class="block3_picView">
        <img v-parallax="0.6" src="../assets/img/dessert3.jpg" alt="">
        <div class="block3_picView_content">
          <div class="block3_picView_content_icon">
            <img src="../assets/icons/feather1.png" alt="">
          </div>
          <div class="block3_picView_content_title">SPEND THE SWEETEST MOMENTS IN OUR CAFE</div>
          <div class="btn">
            <span>SEE MORE</span>
          </div>
        </div>
      </div>
    </div>
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
          <div class="pic">
            <img src="../assets/img/dessert1.jpg" alt="">
          </div>
          <div class="pic">
            <img src="../assets/img/dessert2.jpg" alt="">
          </div>
          <div class="pic">
            <img src="../assets/img/dessert3.jpg" alt="">
          </div>
          <div class="pic">
            <img src="../assets/img/dessert4.jpg" alt="">
          </div>
          <div class="pic">
            <img src="../assets/img/dessert5.jpg" alt="">
          </div>
          <div class="pic">
            <img src="../assets/img/dessert6.jpg" alt="">
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
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
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
        showActive:[]
      }
  },
  name: 'Home'
}
window.onscroll = function () {
  var nav = document.getElementById('nav');
  var scroll =
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    window.pageYOffset;
  if (scroll >= 100) {
    nav.classList.add("leftTop");
  }else{
    nav.classList.remove("leftTop")
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
#home{
  width: 100%;
  max-width: 1200px;
  background: #fff;
  margin: 15px auto;
}
#nav{
  font-family: 'Parisienne', cursive;
  font-size: 24px;
  width: 100%;
  height: 90px;
  background: $mainFontColor;
  top: 0;
  position: sticky;
  transition: 0.3s ease-in-out all;
  z-index: 999;
  border-radius:5px 5px 0 0 ;
  &.leftTop{
    background: $mainFontColor-o1;
    backdrop-filter:blur(8px);
    transition: 0.3s ease-in-out all;
    height: 70px;
    border-radius:0;
    .logo{
      width: 50px;
      height: 70px;
      transition: 0.3s ease-in-out all;
      &_name{
        font-size: 30px;
      }
    }
    .pagesLink{
      &_item{
        padding: 0 30px;
        height: 100%;
        line-height: 70px;
      }
    }
  }
  .logo{
    width: 70px;
    height: 90px;
    margin-left: 50px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    img{
      @extend %img-contain;
    }
    &_name{
      position: absolute;
      right: -220px;
      top: 50%;
      color: $mainLightBrown;
      transform: translateY(-50%);
      font-family: 'Cormorant', serif;
      font-size: 30px;
    }
  }
  .pagesLink{
    float: right;
    height: 100%;
    color: $mainLightBrown;
    @extend %flex-center;
    &_item{
      padding: 0 30px;
      height: 100%;
      line-height: 90px;
      border-left: 1px solid rgba(255, 255, 255, 0.274);
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      &:hover{
        background: $mainFontColor-2;
        color: $mainDarkBrown;
        transition: 0.3s ease-in-out all;
      }
    }
  }
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
</style>
