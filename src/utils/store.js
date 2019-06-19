export const store = {
    state: {
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
        }
}