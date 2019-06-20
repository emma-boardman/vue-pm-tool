import { RepositoryFactory } from "../utils/RepositoryFactory";
const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");

export const store = {
    state: {
        modalControls: {
            isAddTaskFormShowing: false,
            isTaskDetailShowing: false
        },
        resourceControls: {
            resourceTaskList: null,
            isResourceTasksLoading: false,
        },
        resourceTasks: null,
        isTaskFormPresetsLoading: false,
        projectsList: null,
        resourceList: null,
        resourceSchedule: null
    },
    async fetchResourceTasks() {
        this.state.resourceControls.isResourceTasksLoading = true;
        const { data } = await ResourceRepository.getResourceTasks();
        this.state.resourceControls.isResourceTasksLoading = false;
        this.state.resourceControls.resourceTaskList = data;
    }, 
    refreshResourceTasks(refreshedResourceTasks) {
        this.state.resourceTasks = refreshedResourceTasks;
        console.log("input: " + refreshedResourceTasks);
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