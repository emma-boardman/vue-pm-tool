<template>
  <div>
    <SchedulerSchedule
      :resourceList="resourceList"
      :projectList="projectList"
      :task="taskToBeScheduled"
      :handleSchedulePlacement="fetchResourceSchedule"
      :availability="resourceAvailability"
      @handleScheduleSubmit="postNewSchedule"
    />
  </div>
</template>

<script>
import Schedule from "../components/Schedule/Schedule";
import Header from "./Header";
import { mapGetters, mapMutations, mapActions } from "vuex";
import ResourceRepository from "../utils/resourceRepository";
import * as types from "../store/types";

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      projectList: types.PROJECT_LIST,
      resourceList: types.RESOURCE_LIST,
      taskToBeScheduled: types.TASK_TO_BE_SCHEDULED,
      resourceSchedule: types.RESOURCE_SCHEDULE,
      resourceAvailability: types.RESOURCE_AVAILABILITY
    })
  },
  created() {
    fetchTaskOptions: {
      this.$store.dispatch("fetchTaskOptions");
    }
  },
  methods: {
    ...mapActions([
      "fetchTaskOptions",
      "handleSchedulePlacement",
      "handleResourceAvailability",
      "postNewSchedule"
    ]),
    ...mapMutations({
      handleTaskAddModal: types.MUTATE_SHOW_TASK_NEW,
      setResourceSchedule: types.MUTATE_RESOURCE_SCHEDULE
    }),
    async fetchResourceSchedule(resourceAndEstimate) {
      var t0 = performance.now();
      const { data } = await ResourceRepository.getResourceSchedule(
        resourceAndEstimate.resourceId
      );
      this.setResourceSchedule(data);
      this.handleResourceAvailability(resourceAndEstimate);
      var t1 = performance.now();
      console.log(
        "Call to fetchTaskFormPresets took " + (t1 - t0) + " milliseconds."
      );
    }
  },
  components: {
    SchedulerSchedule: Schedule
  }
};
</script>

