<template>
  <div class="notification">
    <img
      v-if="user == 'pm' && unscheduledtasks == 'true'"
      src="../../assets/notification.svg"
      alt="pm notification for unscheduled tasks"
    />
    <img
      v-if="user == 'pm' && unscheduledtasks == 'false'"
      src="../../assets/noNewTasks.svg"
      alt="pm notification for no unscheduled tasks"
    />
    <img
      v-if="user == 'client' && unscheduledtasks == 'true'"
      src="../../assets/schedulePending.svg"
      alt="client notification for unscheduled tasks"
    />
    <img
      v-if="user == 'client' && unscheduledtasks == 'false'"
      src="../../assets/scheduleComplete.svg"
      alt="client notification for no unscheduled tasks"
    />
  </div>
</template>

<script>
export default {
  props: {
    user: String,
    unscheduledtasks: String
  }
};
</script>

<style scoped>
.notification img {
  height: 40px;
}
</style>