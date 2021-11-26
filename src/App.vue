<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
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
