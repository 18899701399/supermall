import Vue from "vue";
import Vuex from 'vuex';

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

// 安装插件
Vue.use(Vuex)

// 创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  getters
})

// 挂载Vue实例
export default store

