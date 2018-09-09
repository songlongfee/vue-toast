<template>
  <div class="bg" v-if="show">
    <div class="wrap" :class="fadeIn?'fade-in':'fade-out'">{{text}}</div>
  </div>
</template>

<style lang="scss" scoped>
.bg{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.wrap{
  position: fixed;
  left: 50%;
  top:50%;
  background: rgba(0,0,0,.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  color:#fff;
}
.fade-in{
  animation: animate-fade-in 0.3s;
}
.fade-out{
  animation: animate-fade-out 0.6s;
}
@keyframes animate-fade-in{
  0%{
    opacity: 0
  }
  100%{
    opacity: 1
  }
}
@keyframes animate-fade-out{
  0%{
    opacity: 1
  }
  100%{
    opacity: 0
  }
}
</style>
