import Vue from "vue";
import Antd from "ant-design-vue";///////全局导入antd
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";///////全局导入antd  样式
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Antd);  ///////全局导入antd


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
