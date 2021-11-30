<template>
  <div id="nav">
    <div class="logo">
      <img src="../assets/icons/logo.png" alt="">
      <div class="logo_name">
        CAFFEE HOUSE
      </div>
    </div>
    <div class="pagesLink">
      <router-link to="/" class="pagesLink_item">Home</router-link>
      <router-link to="/Menu" class="pagesLink_item" >Menu</router-link>
      <router-link to="/Tradition" class="pagesLink_item">Tradition</router-link>
      <router-link to="/#" class="pagesLink_item">Gallery</router-link>
      <router-link to="/#" class="pagesLink_item">Local</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"Nav"
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
#nav{
  font-family: 'Parisienne', cursive;
  font-size: 24px;
  width: 100%;
  height: 90px;
  background: $mainFontColor;
  top: 0;
  position: sticky;
  transition: 0.3s ease-in-out all;
  z-index: 900;
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
    @include pad{
      display: none;
    }
    &_item{
      padding: 0 30px;
      height: 100%;
      line-height: 90px;
      border-left: 1px solid rgba(255, 255, 255, 0.274);
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      color: aliceblue;
      text-decoration: none;
      &:hover{
        background: $mainFontColor-2;
        color: $mainDarkBrown;
        transition: 0.3s ease-in-out all;
      }
    }
  }
  .router-link-exact-active{
    background: $mainFontColor-2;
    color: $mainDarkBrown;
  }
}
</style>