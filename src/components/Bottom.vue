<template>
  <div>
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
          <div class="pic" v-for="items,idx in imgList" :key="idx" @click="showPic.status = true,showPic.openPic = idx">
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
</template>

<script>
export default {
  props:["showPic","imgList"]
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
  .block4{
    @extend %flex-center;
    background: $mainLightBrown;
    padding: 20px;
    font-weight: 900;
    >div{
      width: 50%;
      @include pad{
        width: 100%;
      }
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
        @include pad{
          height: 100%;
        }
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
        @include pad{
          width: 100%;
        }
      }
    }
  }
  .footer{
    background: $mainFooterBrown;
    padding: 30px;
    text-align: center;
    color: #fff;
    border-radius:0 0 5px 5px;
    @include pad{
      font-size: 12px;
    }
  }
</style>