export const store = {
    state: {
        isResourceTasksLoading: false,
        resourceTasks: null,
        isTaskFormPresetsLoading: false,
        projectsList: null,
        resourceList: null,
        resourceSchedule: null
    },
    methods: {
        refreshResourceTasks(refreshedResourceTasks) {
            this.state.resourceTasks = refreshedResourceTasks;
        }
    }
}