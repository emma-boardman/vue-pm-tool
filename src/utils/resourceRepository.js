import Repository from "./Repository";

export default {
    getResourceTasks() {
        return Repository.get(`/readTaskDetails.php`);

    },
    getResourceSchedule(resourceId) {
        return Repository.get(`/readResourceSchedule.php/?id=${resourceId}`);
    }
};