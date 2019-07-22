<template>
  <div class="unscheduled-tasks">
    <unscheduled-task-modal
      :if="isSchedulingComponentShowing"
      :showModal="isSchedulingComponentShowing"
      @closeModal="handleShowSchedulingComponent"
    >
      <unscheduled-task-scheduler />
    </unscheduled-task-modal>
    <div v-if="unscheduledTasks.length >= 1">
      <UnscheduledTasksUSTList :unscheduledTasks="unscheduledTasks" />
    </div>
    <div v-else>
      <p>"No Unscheduled Tasks"</p>
    </div>
  </div>
</template>

<script>
import UnscheduledTaskList from "../components/UnscheduledTaskList/UnscheduledTaskList";
import Modal from "../components/UI/Modal/Modal";
import Scheduler from "./Scheduler";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from "../store/types";

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      unscheduledTasks: types.UNSCHEDULED_TASKS,
      isSchedulingComponentShowing: types.SHOW_SCHEDULING_COMPONENT
    })
  },
  created() {
    fetchUnscheduledTasks: this.$store.dispatch("fetchUnscheduledTasks");
  },
  methods: {
    ...mapActions(["fetchUnscheduledTasks"]),
    ...mapMutations({
      handleShowSchedulingComponent: types.MUTATE_SHOW_SCHEDULING_COMPONENT
    })
  },
  components: {
    UnscheduledTasksUSTList: UnscheduledTaskList,
    UnscheduledTaskModal: Modal,
    UnscheduledTaskScheduler: Scheduler
  }
};
</script>

<style>
.unscheduled-tasks {
  margin-top: 10vh;
  text-align: center;
}
</style>
