<template>
  <div class="tasknew">
    <task-new-task-add
      class="modal-task-add"
      :projects="projectList"
      :resources="resourceList"
      :closeModal="handleTaskAddModal"
    ></task-new-task-add>
  </div>
</template>

<script>
import TaskAdd from "../components/Task/TaskAdd/TaskAdd";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from "../store/types";

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      projectList: types.PROJECT_LIST,
      resourceList: types.RESOURCE_LIST
    })
  },
  created() {
    fetchTaskOptions: {
      this.$store.dispatch("fetchTaskOptions");
    }
  },
  methods: {
    ...mapActions(["fetchTaskOptions"]),
    ...mapMutations({ handleTaskAddModal: types.MUTATE_SHOW_TASK_NEW })
  },
  components: {
    TaskNewTaskAdd: TaskAdd
  }
};
</script>