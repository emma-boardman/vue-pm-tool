<template>
  <div class="unscheduled-task-list">
    <unscheduled-task-list-task
      v-for="task in unscheduledTasks"
      :key="task.taskId"
      :taskInformation="task"
      class="inline-style"
      @click.native="handleShowScheduling(task)"
    >
      <div class="top-row-wrapper">
        <div class="client-name-wrapper">
          <p class="client-name">{{task.clientName}} : {{task.projectTitle}}</p>
        </div>
        <div class="impact-wrapper">
          <p class="task-impact">{{task.taskImpact}}</p>
        </div>
      </div>
      <p class="task-title">" {{task.taskTitle}} "</p>
      <p class="task-label">Affected Area</p>
      <p class="task-information">{{task.taskAffectedArea}}</p>
      <p class="task-label">Erroneous Behaviour</p>
      <p class="task-information">{{task.taskErroneousBehaviour}}</p>
      <p class="task-label">Expected Behaviour</p>
      <p class="task-information">{{task.taskExpectedBehaviour}}</p>
    </unscheduled-task-list-task>
  </div>
</template>

<script>
import Task from "../Task/Task";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from "../../store/types";

export default {
  props: {
    unscheduledTasks: Array
  },
  components: {
    UnscheduledTaskListTask: Task
  },
  methods: {
    ...mapMutations({
      handleShowScheduling: types.MUTATE_SHOW_SCHEDULING_COMPONENT
    })
  }
};
</script>
<style scoped>
.unscheduled-task-list {
  display: flex;
  margin: 0 4%;
}

.inline-style {
  width: 100%;
  height: 100%;
  padding: 2%;
  border-radius: 6px;
}

p {
  font-size: 0.8em;
}

.top-row-wrapper {
  display: flex;
  justify-content: space-between;
}

.client-name {
  font-weight: 600;
}

.task-title {
  font-size: 1em;
  border-bottom: dashed 1px black;
  padding-bottom: 3%;
  width: 97%;
  margin: 0 auto;
}

.task-information {
  margin-top: 2%;
  font-size: 0.9em;
}

.task-impact {
  font-weight: 800;
  background-color: #fff;
  padding: 4%;
  width: 100%;
  border-radius: 6px;
  border: black solid 1px;
  margin-left: 3%;
}

.task-label {
  font-weight: 400;
  margin-bottom: 0;
}
</style>