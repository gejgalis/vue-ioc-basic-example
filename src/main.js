import Vue from "vue";
import App from "./App.vue";
import { VueIocPlugin } from "@vue-ioc/core";

Vue.use(VueIocPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
