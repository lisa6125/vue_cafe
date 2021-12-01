<template>
  <div id="Tradition">
    <div class="textBanner">
      <img v-parallax="0.6" src="../assets/img/dessert8.jpg" alt="">
      <div class="text">The tradition</div>
    </div>
    <div class="tradition_text">
      <div class="textBox">
      <span class="firstword">F</span>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eligendi cumque impedit et ut aliquam numquam, quos excepturi deserunt voluptatem. Et corrupti repellat quasi temporibus facere similique aspernatur commodi maiores?</span>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eligendi cumque impedit et ut aliquam numquam, quos excepturi deserunt voluptatem. Et corrupti repellat quasi temporibus facere similique aspernatur commodi maiores?</span>
      </div>
      <div class="textBox">
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eligendi cumque impedit et ut aliquam numquam, quos excepturi deserunt voluptatem. Et corrupti repellat quasi temporibus facere similique aspernatur commodi maiores?</span>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eligendi cumque impedit et ut aliquam numquam, quos excepturi deserunt voluptatem. Et corrupti repellat quasi temporibus facere similique aspernatur commodi maiores?</span>
      </div>
      <div class="textBox">
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eligendi cumque impedit et ut aliquam numquam, quos  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit recusandae maiores nihil explicabo, dignissimos rerum sapiente vero quas. Corrupti, accusantium ratione a provident magni nesciunt ad eos dolore necessitatibus repudiandae? excepturi deserunt voluptatem. Et corrupti repellat quasi temporibus facere similique aspernatur commodi maiores?</span>
      </div>
    </div>
    <div class="tradition_chef">
      <div class="chefPic">
        <img src="../assets/img/chef.jpg" alt="">
      </div>
      <div class="chefDescript">
        <div class="nameBox">
          <div class="name">Kevin Perry</div>
          <div class="subname">Elemen tumid</div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magnam, voluptatibus aut aliquid eius soluta dolore labore assumenda corporis obcaecati nisi sit. Voluptatem quas voluptatibus nemo recusandae voluptate. Tempore, velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde iusto quas quis omnis sunt voluptate cupiditate! Laudantium quam ab sed facere. Sunt vitae facere qui, saepe tempore sed sapiente molestias!</p>
      </div>
      <div class="chefConnect">
        <span>Lorem ullam, in pariatur a vitae ut iusto asperiores delectus iste repellat aspernatur eius, nostrum excepturi laudantium.</span>
        <div class="mediaItem">
          <div class="icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="icon">
            <i class="fab fa-facebook-square"></i>
          </div>
          <div class="icon"><i class="fab fa-twitter"></i></div>
        </div>
      </div>
    </div>
    <div class="tradition_rolling">
      <div class="tradition_rolling_item">
        <div class="pic">
          <img src="../assets/icons/icon1.png" alt="">
        </div>
        <div class="num">
          <vue-rolling-number :from="0" :to="1250" :speed="1" />
        </div>
        <div class="subtitle">
          Eleifend ante lobortis
        </div>
      </div>
      <div class="tradition_rolling_item">
        <div class="pic">
          <img src="../assets/icons/icon2.png" alt="">
        </div>
        <div class="num">
          <vue-rolling-number :from="0" :to="56" :speed="1" />
        </div>
        <div class="subtitle">
          Eleifend ante lobortis
        </div>
      </div>
      <div class="tradition_rolling_item">
        <div class="pic">
          <img src="../assets/icons/icon3.png" alt="">
        </div>
        <div class="num">
          <vue-rolling-number :from="1523" :to="7500" :speed="1" />
        </div>
        <div class="subtitle">
          Eleifend ante lobortis
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRollingNumber from 'vue-rolling-number'
export default {
  components: {
    VueRollingNumber
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
#Tradition{
  width: 100%;
  .textBanner{
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    .text{
      width: 100%;
      height: 100%;
      font-size: 42px;
      font-weight: 900;
      background: rgba(255, 255, 255, 0.685);
      backdrop-filter:blur(2px);
      text-align: center;
      line-height: 300px;
      @extend %position-center;
    }
    img{
        position: absolute;
        top: -250%;
        left: 0;
        width: 100%;
    }
  }
  .tradition_text{
    @extend %flex-center;
    padding: 0 30px;
    border-bottom: 1px solid $mainBorder;
    .textBox{
      padding:20px 20px;
      width: 33.33%;
      .firstword{
        margin-right: 10px;
        padding: 7px 12px;
        font-size: 24px;
        background: $mainDarkBrown;
        border-radius: 5px;
        color: #fff;
        float: left;
      }
      @include mobile{
        width: 100%;
      }
    }
  }
  .tradition_chef{
    padding: 30px;
    @extend %flex-center;
    .chefPic{
      width:25%;
      padding: 20px 30px;
      img{
        @extend %img-cover;
      }
    }
    .chefDescript{
      width: 50%;
      .nameBox{
        width: 40%;
        border-bottom: 1px solid $mainDarkBrown;
        margin-bottom: 15px;
        .name{
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 5px;
        }
        .subname{
          color: $mainFontColor-2;
          margin-bottom: 15px;
        }
        &+p{
          font-weight: 900;
          margin-bottom: 10px;
        }
      }
    }
    .chefConnect{
      width:calc(25% - 40px);
      margin: 20px;
      padding: 30px;
      font-size: 20px;
      background: $mainLightGray;
      font-family: 'Parisienne', cursive;
      .mediaItem{
        margin-top: 10px;
        @extend %flex-wrap;
        .icon{
          cursor: pointer;
          padding: 10px;
          margin-right: 5px;
          background: $mainDarkGray;
        }
      }
    }
    @include mobile{
      .chefPic,.chefDescript,.chefConnect{
        width: 100%;
      }
      .chefDescript{
        padding: 10px 25px;
      }
    }
  }
  .tradition_rolling{
    width:calc(100% - 40px) ;
    height: 300px;
    padding: 30px;
    margin: 20px;
    background: $mainLightBrown-2;
    @extend %flex-center;
    &_item{
      width: 33.33%;
      @extend %flex-column;
      .pic{
        width: 100px;
        height: 100px;
        img{
          @extend %img-contain;
        }
      }
      .num{
        line-height: 1.5;
        font-size: 46px;
      }
      .subtitle{
        margin-top: 10px;
      }
    }
    @include mobile{
      margin-top: 0;
      &_item{
        .pic{
          width: 40px;
          height: 40px;
        }
        .num{
          font-size: 20px;
        }
        .subtitle{
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
</style>