<template>
  <div class="schedule">
    <p>{{task.taskTitle}}</p>
    <p>{{task.clientName}}</p>

    <form @submit.prevent="handleScheduleSubmission(taskModel, resAvailability, taskId)">
      <ul class="form-wrapper">
        <li class="form-row">
          <label for="resourceId">Resource</label>
          <select id="taskResource" v-model="taskModel.resourceId" required>
            <option
              v-for="resource in resourceList"
              :key="resource.resourceId"
              :value="resource.resourceId"
            >{{ resource.resourceName }}</option>
          </select>
        </li>
        <li class="form-row">
          <label for="taskEstimate">Estimate (hours)</label>
          <input
            type="number"
            id="taskEstimate"
            required
            v-model="taskModel.taskEstimate"
            @blur="handleSchedulePlacement({
          resourceId: taskModel.resourceId,
          taskEstimate: taskModel.taskEstimate})"
          />
        </li>
        <li class="form-row">
          <label for="taskSchedule">First Available Time Slot</label>
          <div>
            <div v-if="availability.endTime === ''">
              <p>Requires resource and estimate input</p>
            </div>
            <div v-else class="timeslots">
              <input readonly v-model="availability.startTime" :placeholder="availability.startTime" /> -
              <input readonly v-model="availability.endTime" :placeholder="availability.endTime" />
            </div>
          </div>
        </li>
      </ul>
          <button type="submit" class="add-task-btn">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    resourceList: Array,
    projectList: Array,
    task: Object,
    handleSchedulePlacement: Function,
    availability: Object
  },
  data() {
    return {
      taskModel: {
        resourceId: "",
        taskEstimate: "",
        availability: {}
      }
    };
  },
  computed: {
    resAvailability: function() {
      return this.availability
    },
    taskId: function() {
      return this.task.taskId
    }
  },
   methods: {
     handleScheduleSubmission: function(taskModel, resAvailability, taskId) {
       let updatedTaskModel = {
         taskResource: taskModel.resourceId,
         taskEstimate: taskModel.taskEstimate,
         taskStartTime: resAvailability.startTime,
         taskEndTime: resAvailability.endTime,
         taskId: taskId
       }
       console.log("in method: ",  updatedTaskModel)
       this.$emit("handleScheduleSubmit", updatedTaskModel);
     }
   }
};
</script>

<style scoped>
.form {
  height: 100%;
}
.schedule {
  padding: 3%;
  padding-bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

li {
  list-style: none;
}

h2 {
  text-align: left;
  margin-top: 0;
}

p {
  font-size: 0.7em;
  text-align: center;
}
.form-wrapper {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.form-row {
  display: flex;
  justify-content: space-between;
  padding: 3% 0%;
}

.form-row > label,
.form-row-text-area > label {
  text-align: left;
  font-size: 0.8em;
  width: 50%;
}

.form-row-text-area > textarea {
  margin-top: 1.8%;
}

.form-row > input,
.form-row > textarea,
.form-row > select,
.timeslots > input {
  background-color: #d8d8d8;
  border: solid 1px #979797;
  border-radius: 4px;
  font-size: 0.8em;
  padding: 0.6%;
  width: 50%;
}

.timeslots {
  display: flex;
  justify-content: flex-end;
}

.timeslots > input {
  width: 35%;
  text-align: center;
  background-color: transparent;
  border: 0;
  font-weight: 600;
}
.timeslots > input:focus {
  outline: none;
}

button {
  background-color: #c7f228;
  padding: 4% 10%;
  border: black solid 1px;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  margin-top: 5%;
}

.cancel-btn {
  font-size: 0.7em;
  margin-bottom: 1%;
  text-align: center;
}
</style>
