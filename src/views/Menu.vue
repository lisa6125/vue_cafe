<template>
  <div id="Menu">
    <div class="textBanner">
      <img v-parallax="0.6" src="../assets/img/dessert13.jpg" alt="">
      <div class="text">The menu</div>
    </div>
    <div class="MenuList">
      <div class="MenuItems">
        <div class="MenuContent">
          <div class="MenuContent_pic">
            <img src="../assets/img/dessert11.jpg" alt="">
            <div class="name">PIES</div>
          </div>
          <div class="MenuContent_decript">
            <div class="MenuContent_decript_item">
              <div class="MenuContent_decript_item_text">
                <div class="itemTitle">consectetur</div>
                <p>provident  dolor sit amet consectetur adipisicing elit. Quis aliquid nulla, reiciendis laboriosam et, ratione debitis quia itaque facere sunt, natusstias repellendus? esse nihil ex totam in voluptatum, fugiat vero eius. Eius, fuga voluptate?</p>
              </div>
              <div class="MenuContent_decript_item_price">$1,29</div>
            </div>
            <div class="MenuContent_decript_item">
              <div class="MenuContent_decript_item_text">
                <div class="itemTitle">consectetur</div>
                <p>provident  dolor sit amet consectetur adipisicing elit. Quis aliquid nulla, reiciendis laboriosam et, ratione debitis quia itaque facere sunt, natusstias repellendus? esse nihil ex totam in voluptatum, fugiat vero eius. Eius, fuga voluptate?</p>
              </div>
              <div class="MenuContent_decript_item_price">$1,79</div>
            </div>
            <div class="MenuContent_decript_item">
              <div class="MenuContent_decript_item_text">
                <div class="itemTitle">consectetur</div>
                <p>provident  dolor sit amet consectetur adipisicing elit. Quis aliquid nulla, reiciendis laboriosam et, ratione debitis quia itaque facere sunt, natusstias repellendus? esse nihil ex totam in voluptatum, fugiat vero eius. Eius, fuga voluptate?</p>
              </div>
              <div class="MenuContent_decript_item_price">$1,99</div>
            </div>
          </div>
        </div>
      </div>
      <div class="MenuItems">
        <div class="MenuContent">
          <div class="MenuContent_pic">
            <img src="../assets/img/dessert12.jpg" alt="">
            <div class="name">CAKES</div>
          </div>
          <div class="MenuContent_decript">
            <div class="MenuContent_decript_item">
              <div class="MenuContent_decript_item_text">
                <div class="itemTitle">consectetur</div>
                <p>provident  dolor sit amet consectetur adipisicing elit. Quis aliquid nulla, reiciendis laboriosam et, ratione debitis quia itaque facere sunt, natusstias repellendus? esse nihil ex totam in voluptatum, fugiat vero eius. Eius, fuga voluptate?</p>
              </div>
              <div class="MenuContent_decript_item_price">$1,29</div>
            </div>
            <div class="MenuContent_decript_item">
              <div class="MenuContent_decript_item_text">
                <div class="itemTitle">consectetur</div>
                <p>provident  dolor sit amet consectetur adipisicing elit. Quis aliquid nulla, reiciendis laboriosam et, ratione debitis quia itaque facere sunt, natusstias repellendus? esse nihil ex totam in voluptatum, fugiat vero eius. Eius, fuga voluptate?</p>
              </div>
              <div class="MenuContent_decript_item_price">$1,79</div>
            </div>
            <div class="MenuContent_decript_item">
              <div class="MenuContent_decript_item_text">
                <div class="itemTitle">consectetur</div>
                <p>provident  dolor sit amet consectetur adipisicing elit. Quis aliquid nulla, reiciendis laboriosam et, ratione debitis quia itaque facere sunt, natusstias repellendus? esse nihil ex totam in voluptatum, fugiat vero eius. Eius, fuga voluptate?</p>
              </div>
              <div class="MenuContent_decript_item_price">$1,99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
#Menu{
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
    @include pad{
      img{
        height: 70vh;
        top: -0%;
      }
    }
  }
  .MenuItems{
    &:nth-child(odd){
      border-bottom: 1px solid $mainBorder;
      border-top: 1px solid $mainBorder;
    }
  }
  .MenuContent{
    padding: 20px;
    @extend %flex-wrap;
    &_pic{
      height: 400px;
      width: 300px;
      position: relative;
      .name{
        background: rgba(172, 169, 160, 0.4);
        // backdrop-filter:blur(2px);
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 400px;
        font-size: 36px;
        font-weight: 900;
        color: #fff;
        @extend %position-center;
      }
      img{
        @extend %img-cover;
      }
    }
    &_decript{
      flex: 1;
      padding: 0 30px;
      &_item{
        @extend %flex-wrap;
        width: 100%;
        &:nth-child(2){
          border-bottom: 1px solid $mainBorder;
          border-top: 1px solid $mainBorder;
          }
        &_text{
          padding: 20px;
          width: 80%;
          border-right: 1px solid $mainBorder;
          .itemTitle{
            font-size: 28px;
            margin-bottom: 10px;
          }
        }
        &_price{
          width: 20%;
          font-size: 32px;
          @extend %flex-center;
        }
      }
    }
    @include pad{
      &_pic{
        width: 100%;
        margin-bottom: 20px;
      }
      &_decript{
        padding: 0px;
      }
    }
  }
}
</style>