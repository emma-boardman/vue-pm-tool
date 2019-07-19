import * as types from './types';
const ResourceRepository = RepositoryFactory.get("resources");
import { RepositoryFactory } from "../utils/RepositoryFactory";


export default {
    [types.ALL_TASKS]: ({ commit }) => {
        commit(changeTaskLoadingState, true);
        const { data } = ResourceRepository.getResourceTasks();
        commit(changeTaskLoadingState, true);
        commit(updateTasks, data);
      }
    };