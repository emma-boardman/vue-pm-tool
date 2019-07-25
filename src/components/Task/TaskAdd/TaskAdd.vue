<template>
  <div class="add-task">
    <h2>Add New Task</h2>

    <form @submit.prevent="handleFormSubmission(task)">
      <div class="top-on-desktop">
        <div class="left-on-desktop">
          <ul class="form-wrapper">
            <li class="form-row">
              <label for="projectId">Project</label>
              <select id="taskProject" v-model="task.projectId" required>
                <option
                  v-for="project in projects"
                  :key="project.projectId"
                  :value="project.projectId"
                >{{ project.clientName + ": " + project.projectName }}</option>
              </select>
            </li>
            <li class="form-row">
              <label for="taskTitle">Task Title</label>
              <input type="text" id="taskTitle" v-model="task.taskTitle" required />
            </li>
            <li class="form-row">
              <label for="taskArea">Affected area</label>
              <input type="text" id="taskArea" v-model="task.taskAffectedArea" required />
            </li>
            <li class="form-row">
              <label for="taskErroneousBehaviour">Erroneous behaviour</label>
              <textarea
                id="taskErroneousBehaviour"
                rows="2"
                cols="20"
                v-model="task.taskErroneousBehaviour"
                required
              />
            </li>
            <li class="form-row">
              <label for="taskExpectedBehaviour">Expected behaviour</label>
              <textarea
                id="taskExpectedBehaviour"
                rows="2"
                cols="20"
                v-model="task.taskExpectedBehaviour"
                required
              />
            </li>
          </ul>
        </div>
        <div class="right-on-desktop">
          <ul class="form-wrapper">
            <li class="form-row">
              <label for="taskImpact">Impact on business</label>
              <select id="taskImpact" v-model="task.taskImpact" required>
                <option v-for="impact in impactOptions" :key="impact">{{ impact }}</option>
              </select>
            </li>
            <li class="form-row">
              <label for="taskTimeNoticed">Time noticed</label>
              <input type="text" id="taskTimeNoticed" v-model="task.taskTimeNoticed" required />
            </li>
            <li class="form-row">
              <label for="taskRecentChanges">Recent Changes</label>
              <input type="text" id="taskRecentChanges" v-model="task.taskRecentChanges" required />
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-on-desktop">
        <add-task-button type="submit" class="add-task-btn">Add Task</add-task-button>
        <!-- <button type="submit" class="add-task-btn">Add Task</button> -->
        <p class="cancel-btn" @click="$emit('closeModal')">Cancel</p>
      </div>
    </form>
  </div>
</template>

<script>
import { store } from "../../../utils/store.js";
import Button from "../../UI/Button/Button";

export default {
  props: {
    resources: Array,
    projects: Array
  },
  data() {
    return {
      task: {
        projectId: "",
        taskTitle: "",
        taskAffectedArea: "",
        taskErroneousBehaviour: "",
        taskExpectedBehaviour: "",
        taskImpact: "low",
        taskTimeNoticed: "",
        taskRecentChanges: "",
      },
      impactOptions: ["Low", "Medium", "High"]
    };
  },
  components: {
    AddTaskButton: Button
  },
  methods: {
    handleFormSubmission: async function(task) {
      console.log("in hfs: ", task);
      await this.$emit("handleNewTaskSubmit", task);
      this.clearFormFields();
    },
    clearFormFields: function() {
      var t0 = performance.now();
      Object.keys(this.task).forEach(key => {
        this.task[key] = "";
      });
      var t1 = performance.now();
      console.log(
        "Call to clearFormFields took " + (t1 - t0) + " milliseconds."
      );
    }
  }
};
</script>

<style scoped>
.form {
  height: 100%;
}
.add-task {
  padding: 3%;
  padding-bottom: 0;
  height: 100%;
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

@media (min-width: 600px) {
  form {
    display: flex;
    flex-direction: column;
  }
  .add-task {
    width: 100%;
    padding: 0;
  }
  form > .top-on-desktop {
    display: flex;
  }
  .form-row {
    flex-direction: column;
    width: 100%;
    padding-top: 1.5%;
  }
  .top-on-desktop > .left-on-desktop {
    width: 50%;
  }
  .top-on-desktop > .right-on-desktop {
    width: 50%;
  }
  .form-row > input,
  .form-row > textarea,
  .form-row > select {
    width: 85%;
    margin-top: 2%;
    margin-bottom: 0;
    padding: 1.5%;
  }
  .form-row > label {
    width: 100%;
    margin-top: 0;
  }
  p {
    text-align: left;
  }
  button {
    padding: 2% 5%;
    margin-top: 1.5%;
    margin-bottom: 1%;
  }
  .cancel-btn {
    margin-bottom: 0;
  }
}
</style>
