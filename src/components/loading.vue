<!--Loading页 -->
<template>
  <div class="loaders">
    <div class="loader">
      <div class="loader-inner line-spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>努力加载中...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss" scoped>
.loaders {
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
.loaders .loader {
  position: absolute;
  top: 30%;
  left: 50%;
  /*width: 30%;*/
}
/*用于点击按钮后的加载中*/
.loadersLoading {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: none;
  background-color: rgba(0, 0, 0, 0.2);
}
.loadersLoading .loader {
  position: absolute;
  top: 46%;
  left: 50%;
}
@-webkit-keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

.line-spin-fade-loader {
  position: relative;
}

.loader p {
  position: relative;
  top: 60px;
  left: -40%;
}
.line-spin-fade-loader > div:nth-child(1) {
  top: 20px;
  left: 0;
  -webkit-animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(2) {
  top: 17.63636px;
  left: 9.63636px;
  -webkit-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  transform: rotate(-30deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(3) {
  top: 9.63636px;
  left: 17.63636px;
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(4) {
  top: 0px;
  left: 20px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(5) {
  top: -9.63636px;
  left: 17.63636px;
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(6) {
  top: -17.63636px;
  left: 9.63636px;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(7) {
  top: -20px;
  left: 0;
  -webkit-animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(8) {
  top: -17.63636px;
  left: -9.63636px;
  -webkit-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  transform: rotate(-30deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(9) {
  top: -9.63636px;
  left: -17.63636px;
  -webkit-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  transform: rotate(-60deg);
  -webkit-animation: line-spin-fade-loader 1.2s 1.08s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 1.08s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(10) {
  top: 0;
  left: -20px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1.2s 1.2s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 1.2s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(11) {
  top: 9.63636px;
  left: -17.63636px;
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
  -webkit-animation: line-spin-fade-loader 1.2s 1.32s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 1.32s infinite ease-in-out;
}
.line-spin-fade-loader > div:nth-child(12) {
  top: 17.63636px;
  left: -9.63636px;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
  -webkit-animation: line-spin-fade-loader 1.2s 1.44s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 1.44s infinite ease-in-out;
}
.line-spin-fade-loader > div {
  background-color: #777777;
  width: 4px;
  height: 30px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  width: 5px;
  height: 15px;
}
</style>
