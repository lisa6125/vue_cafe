<template>
<div id="home">
  <Banner/>
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
</div>
</template>

<script>
import Banner from "../components/Banner.vue"
export default {
  name: 'Home',
  components: {
    Banner,
  },
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

  .block1{
    border-bottom: 1px solid $mainFontColor-o1;
    @include pad{
      padding-bottom: 50px;
    }
    &_descript{
      margin: 0 auto;
      width: 400px;
      margin-top: 20px;
      @include pad{
        padding: 0 20px;
        width: 100%;
      }
    }
    &_cards{
      margin-top: 70px;
      padding: 0 20px;
      @extend %flex-center;
      @include pad{
        margin-top: 10px;
      }
      &_items{
        width: 25%;
        padding: 20px;
        @include pad{
          width: 50%;
        }
        .icon{
          text-align: center;
        }
        .title{
          text-align: center;
          font-weight: 900;
          font-size: 24px;
          margin-top: 10px;
          @include pad{
            font-size: 16px;
          }
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
      @include pad{
        width: 100%;
      }
    }
    &_pic{
      img{
        @extend %img-contain
      }
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
          @include pad{
            width: 100%;
            font-size: 24px;
          }
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
        @include pad{
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }
      }
    }
    &_descript{
      width: 400px;
      margin: 0 auto;
      @include pad{
        width: 100%;
        padding: 0 20px;
      }
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
    @include pad{
      font-size: 20px;
    }
  }
  .btn{
    color: $mainDarkBrown;
    font-family: 'Cormorant', serif;
    border-radius: 5px;
    margin: 0 auto;
    padding: 50px;
    text-align: center;
    @include pad{
      margin-top: 50px;
      padding: 0;
    }
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
</style>
