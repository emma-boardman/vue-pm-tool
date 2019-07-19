import Repository from "./Repository";
import resourceRepository from "./resourceRepository";

export default{
    getTaskFormPresets() {
        return Repository.get(`/readAddTaskOptions.php`); 
    },
    getUnscheduledTasks() {
        return resourceRepository.get(`readUnscheduledTasks.php`);
    }
};