import { RepositoryFactory } from "../utils/RepositoryFactory";
import axios from "axios";
const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");

export const store = {
    state: {
        emma: "emma",
        modalControls: {
            isAddTaskFormShowing: false,
            isTaskDetailShowing: false
        },
        resourceControls: {
            resourceList: null,
            resourceTaskList: null,
            staticResourceList: null,
            isResourceTasksLoading: false,
            newTask: ''
        },
        resourceTasks: null,
        isTaskFormPresetsLoading: false,
        projectsList: null,
        resourceList: null,
        resourceSchedule: null
    },
    async fetchResourceTasks() {
        console.log("?");
        this.state.resourceControls.isResourceTasksLoading = true;
        const { data } = await ResourceRepository.getResourceTasks();
        this.state.resourceControls.isResourceTasksLoading = false;
        this.state.resourceControls.resourceTaskList = data;
        console.log("fetched: " +  this.state.resourceControls.resourceTaskList);
    }, 
    async fetchResources(){
        const { data } = await ResourceRepository.getResourceList();
        this.state.resourceControls.resourceList = data;
        console.log("rl: " + this.state.resourceControls.resourceList);
    },
    postNewTask(task) {
      axios
        .post("http://40414669.wdd.napier.ac.uk/inc/postNewTask.php", task)
        .then(response => {
          console.log(response);
          this.$store.dispatch("fetchUnscheduledTasks");
          
        })
        .catch(error => console.log(error));
    },
    async refreshResourceTasks(refreshedResourceTasks) {
        this.state.resourceControls.resourceTaskList = refreshedResourceTasks;
    },
    showAddTaskForm() {
        this.state.modalControls.isAddTaskFormShowing = true;
    },
    hideAddTaskForm() {
        this.state.modalControls.isAddTaskFormShowing = false;
    },
    hideTaskDetail() {
        this.state.modalControls.isTaskDetailShowing = false;
    }
}