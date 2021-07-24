import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// vue3.x的组件和路由挂载，vue2.x的为：
// import Vue from 'vue' (vue3.x的为createApp)
// import App from './App.vue'
// import router from './router'
// Vue.config.productionTip = false
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')
createApp(App).use(router).mount('#app')