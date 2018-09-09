import vue from 'vue'

import toast from './toast.vue'

const ToastConstructor = vue.extend(toast)

function showToast (text, duration = 2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        text,
        show: true,
        fadeIn: true
      }
    }
  })

  document.body.appendChild(toastDom.$el)

  setTimeout(() => {
    toastDom.fadeIn = false
  }, duration - 600);
  setTimeout(() => {
    toastDom.show = false
  }, duration)
}

function registerToast () {
  vue.prototype.$toast = showToast
}

export default registerToast
