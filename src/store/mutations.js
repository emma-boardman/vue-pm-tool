import * as types from './types'

export default {
    [types.MUTATE_UPDATE_TASKS]: (state, tasks) => {
        state.tasks = tasks
    }
}