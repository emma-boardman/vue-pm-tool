export const store = {
    state: {
        modalControls: {
            isAddTaskFormShowing: false
        },
        isResourceTasksLoading: false,
        resourceTasks: null,
        isTaskFormPresetsLoading: false,
        projectsList: null,
        resourceList: null,
        resourceSchedule: null,
        emma: "hello"
    },
    refreshResourceTasks(refreshedResourceTasks) {
            this.state.resourceTasks = refreshedResourceTasks;
            console.log("input: " + refreshedResourceTasks);
            console.log("output: " + this.state.emma);
    },
    showAddTaskForm() {
        this.state.modalControls.isAddTaskFormShowing = true;
        console.log("I am triggered");
        console.log(this.state.modalControls.isAddTaskFormShowing);
    },
    hideAddTaskForm() {
        this.state.modalControls.isAddTaskFormShowing = false;
    }
}