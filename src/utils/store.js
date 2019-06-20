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
        resourceSchedule: null
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
    }
}