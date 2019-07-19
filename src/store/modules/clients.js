import * as types from "../types";
const ResourceRepository = RepositoryFactory.get("resources");
import { RepositoryFactory } from "../../utils/RepositoryFactory";

const state = {
  clientTaskList: [],
  isClientTasksLoading: false
};

const getters = {
  [types.CLIENT_TASKS]: state => state.clientTaskList
};

const mutations = {
  [types.MUTATE_UPDATE_CLIENT_TASKS]: (state, tasks) => {
    state.clientTaskList = tasks;
  },
  [types.MUTATE_CLIENT_TASK_LOADING]: (state, loading) => {
    state.isClientTasksLoading = loading;
  }
};

const actions = {
  async fetchClientResourceTasks({ commit }) {
    commit(types.MUTATE_CLIENT_TASK_LOADING, true);
    const { data } = await ResourceRepository.getClientResourceTasks();
    commit(types.MUTATE_CLIENT_TASK_LOADING, true);
    commit(types.MUTATE_UPDATE_CLIENT_TASKS, data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
