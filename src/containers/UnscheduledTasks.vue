<template>
  <div>
    <unscheduled-tasks-ust-list />
  </div>
</template>

<script>
import UnscheduledTaskList from "../components/UnscheduledTaskList/UnscheduledTaskList";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from "../store/types";

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      unscheduledTasks: types.UNSCHEDULED_TASKS
    })
  },
  created() {
    fetchUnscheduledTasks: this.$store.dispatch("fetchUnscheduledTasks");
  },
  methods: {
    ...mapActions(["fetchUnscheduledTasks"])
  },
  components: {
    UnscheduledTasksUSTList: UnscheduledTaskList
  }
};
</script>

