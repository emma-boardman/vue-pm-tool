import Vue from "vue";
import Vuex from "vuex";
import tasks from "./modules/tasks";
import clients from "./modules/clients";
import resources from "./modules/resources";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    tasks,
    clients,
    resources
  }
});
