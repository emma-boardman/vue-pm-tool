import Repository from "./Repository";
import resourceRepository from "./resourceRepository";

export default{
    getTaskFormPresets() {
        return Repository.get(`/readAddTaskOptions.php`); 
    },
    getUnscheduledTasks() {
        console.log("get ust running");
        return Repository.get(`readUnscheduledTasks.php`);
    }
};