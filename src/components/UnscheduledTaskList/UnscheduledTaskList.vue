<template>
  <div>
    <p>"UST LIST"</p>
    <unscheduled-task-list-task v-for="task in unscheduledTasks" :key="task.taskId">
      <p>{{task.taskTitle}}</p>
    </unscheduled-task-list-task>
  </div>
</template>

<script>
import Task from "../Task/Task";

export default {
  props: {
    unscheduledTasks: Array
  },
  components: {
    UnscheduledTaskListTask: Task
  }
};
</script>
<style scoped>
</style>