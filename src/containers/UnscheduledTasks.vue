<template>
  <div class="unscheduled-tasks">
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

<style>

.unscheduled-tasks {
  margin-top: 10vh;
  text-align: center;
}

</style>
