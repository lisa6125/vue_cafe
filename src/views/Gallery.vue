<template>
  <div id="Gallery">
    <div class="textBanner">
      <img v-parallax="0.6" src="../assets/img/dessert5.jpg" alt="">
      <div class="text">Photo gallery</div>
    </div>
    <div class="gallery_item">
      <div class="gallery_item_text">
        <div class="subtitle">at explicabo,jiujo cwdfvpo quod repudiandae</div>
        <div class="icon">
          <img src="../assets/icons/dove.png" alt="">
        </div>
        <p>Lorem ipsum dolor, sit a ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minus, est animi expedita quae, quas, cum provident nesciunt ea a exercitationemet consectetur adipisicing elit. Mollitia minus, est animi expedita quae, quas, cum provident nesciunt ea a exercitationem et ducimus. Temporibus pariatur incidunt, officia cupiditate consequatur voluptas.</p>
        <p> ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minus, est animi expedita quae, quas, cum provident nesciunt ea a exercitationeLorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deserunt in iusto consequuntur quas deleniti quaerat modi quibusdam, dolorum placeat vel eveniet explicabo inventore aperiam odio rem! Ipsum, odit debitis?</p>
      </div>
      <div class="gallery_item_pics">
        <div class="pic" v-for="item,idx in imgList1" :key="idx" @click="showPic1.status = true ,showPic1.openPic = idx">
          <img :src="item.src" alt="">
        </div>
      </div>
    </div>
    <div class="gallery_item">
      <div class="gallery_item_pics">
        <div class="pic" v-for="item,idx in imgList2" :key="idx" @click="showPic2.status = true ,showPic2.openPic = idx">
          <img :src="item.src" alt="">
        </div>
      </div>
      <div class="gallery_item_text">
        <div class="subtitle">at explicabo,jiujo cwdfvpo quod repudiandae</div>
        <div class="icon">
          <img src="../assets/icons/dove.png" alt="">
        </div>
        <p>Lorem ipsum dolor, sit a ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minus, est animi expedita quae, quas, cum provident nesciunt ea a exercitationemet consectetur adipisicing elit. Mollitia minus, est animi expedita quae, quas, cum provident nesciunt ea a exercitationem et ducimus. Temporibus pariatur incidunt, officia cupiditate consequatur voluptas.</p>
        <p> ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minus, est animi expedita quae, quas, cum provident nesciunt ea a exercitationeLorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deserunt in iusto consequuntur quas deleniti quaerat modi quibusdam, dolorum placeat vel eveniet explicabo inventore aperiam odio rem! Ipsum, odit debitis?</p>
      </div>
    </div>
    <ShowPicBox :showPic="showPic1" :imgList="imgList1" @changePic="changePic1"/>
    <ShowPicBox :showPic="showPic2" :imgList="imgList2" @changePic="changePic2"/>
  </div>
</template>

<script>
import ShowPicBox from "../components/ShowPicBox.vue"
export default {
  components: {
    ShowPicBox
  },
  data() {
    return {
        showPic1:{
          status:false,
          openPic:0
        },
        imgList1:[
          {src:require('../assets/img/dessert1.jpg')},
          {src:require('../assets/img/dessert2.jpg')},
          {src:require('../assets/img/dessert3.jpg')},
          {src:require('../assets/img/dessert4.jpg')},
        ],
        showPic2:{
          status:false,
          openPic:0
        },
        imgList2:[
          {src:require('../assets/img/dessert5.jpg')},
          {src:require('../assets/img/dessert6.jpg')},
          {src:require('../assets/img/dessert7.jpg')},
          {src:require('../assets/img/dessert8.jpg')},
        ],
      }
  },
  methods:{
    changePic1(){
      if(this.showPic1.openPic === (this.imgList1.length-1)){
        this.showPic1.openPic = 0
      }else{
        this.showPic1.openPic = (this.showPic1.openPic + 1) %(this.imgList1.length+1)
      }
    },
    changePic2(){
      if(this.showPic2.openPic === (this.imgList2.length-1)){
        this.showPic2.openPic = 0
      }else{
        this.showPic2.openPic = (this.showPic2.openPic + 1) %(this.imgList2.length+1)
      }
    }
  },
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
#Gallery{
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
  .gallery_item{
    padding:50px 30px;
    border-bottom: 1px solid $mainBorder;
    @extend %flex-center;
    &_text{
      padding: 40px;
      .subtitle{
        margin: 0 auto;
        letter-spacing: 2px;
        width: 70%;
        font-size: 32px;
        font-family: 'Parisienne', cursive;
        margin-bottom: 30px;
      }
      .icon{
        margin: 0 auto;
        width: 40px;
        height: 40px;
        margin-bottom: 30px;
        img{
          @extend %img-contain;
        }
        &+p{
          font-weight: 900;
          margin-bottom: 20px;
        }
      }
      p{
        text-align: center
      }
    }
    &_pics{
      padding: 30px;
      @extend %flex-center;
      @include pad{
        padding: 0;
      }
      .pic{
        background: $mainLightGray;
        width: calc(50% - 10px);
        height: 250px;
        margin: 5px;
        padding: 10px;
        cursor: pointer;
        img{
          @extend %img-cover;
        }
      }
    }
    div{
      width: 50%;
    }
    @include pad{
      padding: 10px;
      &:nth-child(odd){
        flex-direction: column-reverse;
      }
      div{
        width: 100%;
      }
    }
  }
}
</style>