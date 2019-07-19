import * as types from "../types";
const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");
import { RepositoryFactory } from "../../utils/RepositoryFactory";

const state = {
  tasks: [],
  isTasksLoading: false,
  projectList: [],
  resourceList: [],
  isTaskOptionsLoading: false,
  showTaskNew: false,
  showTaskDetails: false,
  selectedTask: {
    taskId: "0",
    taskTitle: "No task was selected, please exit the screen and click a task",
    taskAffectedArea: "n/a",
    taskErroneousBehaviour: "n/a",
    taskExpectedBehaviour: "n/a",
    taskImpact: "n/a",
    taskStartTime: "n/a",
    taskEndTime: "n/a",
    taskEstimate: "n/a",
    projectTitle: "n/a",
    clientName: "n/a"
  }
};

const getters = {
  [types.ALL_TASKS]: state => state.tasks,
  [types.PROJECT_LIST]: state => state.projectList,
  [types.RESOURCE_LIST]: state => state.resourceList,
  [types.SHOW_TASK_NEW]: state => state.showTaskNew,
  [types.SHOW_TASK_DETAILS]: state => state.showTaskDetails,
  [types.SELECTED_TASK]: state => state.selectedTask
};

const mutations = {
  [types.MUTATE_UPDATE_TASKS]: (state, tasks) => {
    state.tasks = tasks;
  },
  [types.MUTATE_TASK_LOADING]: (state, loading) => {
    state.isTasksLoading = loading;
  },
  [types.MUTATE_TASK_OPTIONS]: (state, taskOptions) => {
    const updatedProjectList = actions.handleTaskPresets(
      taskOptions.clientProjects
    );
    state.projectList = updatedProjectList;
    state.resourceList = taskOptions.resources;
  },
  [types.MUTATE_TASK_OPTIONS_LOADING]: (state, loading) => {
    state.isTaskOptionsLoading = loading;
  },
  [types.MUTATE_SHOW_TASK_NEW]: state => {
    state.showTaskNew = !state.showTaskNew;
  },
  [types.MUTATE_SHOW_TASK_DETAILS]: (state, task) => {
    if (!state.showTaskDetails) {
      state.showTaskDetails = !state.showTaskDetails;
      state.selectedTask = task;
    } else {
      state.showTaskDetails = !state.showTaskDetails;
      state.selectedTask = {
        taskId: "0",
        taskTitle:
          "No task was selected, please exit the screen and click a task",
        taskAffectedArea: "n/a",
        taskErroneousBehaviour: "n/a",
        taskExpectedBehaviour: "n/a",
        taskImpact: "n/a",
        taskStartTime: "n/a",
        taskEndTime: "n/a",
        taskEstimate: "n/a",
        projectTitle: "n/a",
        clientName: "n/a"
      };
    }
  }
};

const actions = {
  async fetchResourceTasks({ commit }) {
    commit(types.MUTATE_TASK_LOADING, true);
    const { data } = await ResourceRepository.getResourceTasks();
    commit(types.MUTATE_TASK_LOADING, true);
    commit(types.MUTATE_UPDATE_TASKS, data);
  },
  async fetchTaskOptions({ commit }) {
    commit(types.MUTATE_TASK_OPTIONS_LOADING, true);
    const { data } = await TaskRepository.getTaskFormPresets();
    commit(types.MUTATE_TASK_OPTIONS_LOADING, false);
    commit(types.MUTATE_TASK_OPTIONS, data);
  },
  handleTaskPresets: projectsList => {
    var t0 = performance.now();
    let projectsArray = projectsList.reduce(function(
      formPresetsArray,
      clientObj
    ) {
      for (let j = 0; j < clientObj.projects.length; j++) {
        let clientObject = {
          clientName: clientObj.clientName,
          projectName: clientObj.projects[j].projectTitle,
          projectId: clientObj.projects[j].projectId
        };
        formPresetsArray.push(clientObject);
      }
      return formPresetsArray;
    },
    []);
    var t1 = performance.now();
    console.log(
      "Call to handleTaskPresets took " + (t1 - t0) + " milliseconds."
    );
    return projectsArray;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
