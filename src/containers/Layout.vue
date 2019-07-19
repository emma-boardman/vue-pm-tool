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
    <layout-calendar></layout-calendar>
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
import axios from "axios";
import { RepositoryFactory } from "../utils/RepositoryFactory";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from '../store/types'

const ResourceRepository = RepositoryFactory.get("resources");
const TaskRepository = RepositoryFactory.get("tasks");

export default {
  data: function() {
    return {
      store,
      resourceSchedule: {},
      firstAvailableStartTime: "",
      firstAvailableEndTime: ""
    };
  },
  computed: {
    ...mapGetters({
      isAddTaskFormShowing: types.SHOW_TASK_NEW,
      isTaskDetailShowing: types.SHOW_TASK_DETAILS,
      selectedTask: types.SELECTED_TASK
    })
  },
  created() {
  },
  components: {
    layoutHeader: Header,
    layoutCalendar: Calendar,
    layoutFooter: Footer,
    layoutModal: Modal,
    layoutTaskNew: TaskNew,
    layoutTaskDetail: TaskDetail
  },
  methods: {
    ...mapMutations({ 
      handleTaskAddModal: types.MUTATE_SHOW_TASK_NEW,
      handleTaskDetailModal: types.MUTATE_SHOW_TASK_DETAILS
    }),
    async fetchResourceSchedule(resourceAndEstimate) {
      var t0 = performance.now();
      this.isResourceScheduleLoading = true;
      const { data } = await ResourceRepository.getResourceSchedule(
        resourceAndEstimate.resourceId
      );
      this.isResourceScheduleLoading = false;
      this.resourceSchedule = data;
      this.handleResourceAvailability(resourceAndEstimate);
      var t1 = performance.now();
      console.log(
        "Call to fetchTaskFormPresets took " + (t1 - t0) + " milliseconds."
      );
    },
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
    handleResourceAvailability: function(resourceAndEstimate) {
      var t0 = performance.now();
      const weeklyAvailability = Array(45).fill(true);
      const weeklyTimeSlots = [
        "Mon0900",
        "Mon1000",
        "Mon1100",
        "Mon1200",
        "Mon1300",
        "Mon1400",
        "Mon1500",
        "Mon1600",
        "Mon1700",
        "Tues0900",
        "Tues1000",
        "Tues1100",
        "Tues1200",
        "Tues1300",
        "Tues1400",
        "Tues1500",
        "Tues1600",
        "Tues1700",
        "Wed0900",
        "Wed1000",
        "Wed1100",
        "Wed1200",
        "Wed1300",
        "Wed1400",
        "Wed1500",
        "Wed1600",
        "Wed1700",
        "Thurs0900",
        "Thurs1000",
        "Thurs1100",
        "Thurs1200",
        "Thurs1300",
        "Thurs1400",
        "Thurs1500",
        "Thurs1600",
        "Thurs1700",
        "Fri0900",
        "Fri1000",
        "Fri1100",
        "Fri1200",
        "Fri1300",
        "Fri1400",
        "Fri1500",
        "Fri1600",
        "Fri1700"
      ];
      if (this.resourceSchedule.length > 0) {
        for (let n = 0; n < this.resourceSchedule.length; n++) {
          const startTime = this.resourceSchedule[n].taskStartTime;
          const estimatedTime = this.resourceSchedule[n].taskEstimate;
          for (let i = 0; i < weeklyTimeSlots.length; i++) {
            if (weeklyTimeSlots[i] == startTime) {
              for (let j = 0; j < estimatedTime; j++) {
                weeklyAvailability[i + j] = false;
              }
            }
          }
        }
      }
      console.log(weeklyAvailability);
      const estimateArray = Array(resourceAndEstimate.taskEstimate).fill(true);
      let indexOfFirstAvailability = this.findAvailability(
        weeklyAvailability,
        estimateArray
      );
      this.firstAvailableStartTime = weeklyTimeSlots[indexOfFirstAvailability];
      const endTime =
        parseInt(indexOfFirstAvailability) +
        parseInt(resourceAndEstimate.taskEstimate);
      this.firstAvailableEndTime = weeklyTimeSlots[endTime];
      var t1 = performance.now();
      console.log(
        "Call to handleResourceAvailability took " +
          (t1 - t0) +
          " milliseconds."
      );
    },
    findAvailability(arr, subarr) {
      var t0 = performance.now();
      for (var i = 0; i < 1 + (arr.length - subarr.length); i++) {
        var j = 0;
        for (; j < subarr.length; j++) if (arr[i + j] !== subarr[j]) break;
        if (j == subarr.length) return i;
      }
      var t1 = performance.now();
      console.log(
        "Call to findAvailability took " + (t1 - t0) + " milliseconds."
      );
      return -1;
    }
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
