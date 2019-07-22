<template>
  <div>
    <layout-modal
      :if="isAddTaskFormShowing"
      :showModal="isAddTaskFormShowing"
      @closeModal="handleTaskAddModal"
    >
      <layout-task-new />
    </layout-modal>
    <layout-modal
      :if="isTaskDetailShowing"
      @closeModal="handleTaskDetailModal"
      :showModal="isTaskDetailShowing"
      class="modal-task-detail"
    >
      <layout-task-detail :task="selectedTask" @closeModal="handleTaskDetailModal"></layout-task-detail>
    </layout-modal>
    <layout-header></layout-header>
    <div v-if="isUnscheduledTaskView">
    <layout-unscheduled-tasks/>
    </div>
    <div v-else>
    <layout-calendar />
    </div>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import Header from "../containers/Header";
import Calendar from "../components/Calendar/Calendar.vue";
import Footer from "../components/Footer/Footer.vue";
import Modal from "../components/UI/Modal/Modal.vue";
import TaskNew from "../containers/TaskNew";
import TaskDetail from "../components/Task/TaskDetail/TaskDetail.vue";
import UnscheduledTasks from "../containers/UnscheduledTasks.vue"
import axios from "axios";
import { RepositoryFactory } from "../utils/RepositoryFactory";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from "../store/types";

const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");

export default {
  data: function() {
    return {
      firstAvailableStartTime: "",
      firstAvailableEndTime: ""
    };
  },
  computed: {
    ...mapGetters({
      isAddTaskFormShowing: types.SHOW_TASK_NEW,
      isTaskDetailShowing: types.SHOW_TASK_DETAILS,
      selectedTask: types.SELECTED_TASK
    }),
    isUnscheduledTaskView: function() {
      if (this.$route.path.includes("unscheduledtasks")) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {},
  components: {
    layoutHeader: Header,
    layoutCalendar: Calendar,
    layoutFooter: Footer,
    layoutModal: Modal,
    layoutTaskNew: TaskNew,
    layoutTaskDetail: TaskDetail,
    layoutUnscheduledTasks: UnscheduledTasks
  },
  methods: {
    ...mapMutations({
      handleTaskAddModal: types.MUTATE_SHOW_TASK_NEW,
      handleTaskDetailModal: types.MUTATE_SHOW_TASK_DETAILS
    }),
    handleFormSubmission: function(task) {
      var t0 = performance.now();
      console.log(task);
      this.handleTaskAddModalClose();
      this.postNewTask(task);
      var t1 = performance.now();
      console.log(
        "Call to handleFormSubmission took " + (t1 - t0) + " milliseconds."
      );
      // this.firstAvailableStartTime ='';
      // this.firstAvailableEndTime ='';
    },

  }
};
</script>

<style scoped>
.modal-task-detail >>> .modal {
  padding: 0;
  top: 10%;
  border: var(--dark-grey) solid 1px;
}
</style>
