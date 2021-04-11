import Vue from 'vue'
import router from '@/router.js'
Vue.directive('permission', {
  inserted(el, binding) {
    const action = binding.value.actionconst
    const effect = binding.value.effect
    //判断，当前的路由所对应的组件中，如何判断用户是否具备action的权限
    if (router.currentRoute.meta.indexof(action) == -1) {
      if (effect === 'disabled') {
        el.disabled = true
        el.classList.add('is-disabled')
      } else {
        el.parentNode.removeChild(e1)
      }
    }
  }
})
//-permission="{action:'add',effect:'disabled'}"
