<template>
  <div class="weekly-grid">
    <weekly-grid-day-date
      v-for="day in currentWeek"
      :key="day"
      class="weekday"
      :class="day.replace(/ .*/,'').toLowerCase()"
    >{{ day }}</weekly-grid-day-date>
    <weekly-grid-task
      v-for="task in tasks"
      :key="task.taskId"
      class="task"
      @click.native="emitTaskDetails(task)"
      :style="generateTaskClasses(task)"
    >
      <p class="clientName" v-if="task.taskEstimate > 3">{{ task.clientName }}</p>
      <p class="clientName" v-else>{{ task.clientName.substring(0,2) + ".." }}</p>
      <p class="title" v-if="task.taskEstimate > 3">{{ task.taskAffectedArea }}</p>
      <p class="title" v-else>( ... )</p>
    </weekly-grid-task>
  </div>
</template>

<script>
import DayDate from "./DayDate/DayDate.vue";
import Task from "../../Task/Task.vue";
import { EventBus } from "../../../event-bus.js";

export default {
  props: ["tasks"],
  computed: {
    currentWeek: function() {
      return this.getWeeklyArray();
    }
  },
  components: {
    weeklyGridDayDate: DayDate,
    weeklyGridTask: Task
  },
  methods: {
    getCurrentDate: function() {
      return new Date();
    },
    getMonday: function() {
      let currentDate = this.getCurrentDate(),
        currentDay = currentDate.getDay(),
        diff = currentDate.getDate() - currentDay + (currentDay == 0 ? -6 : 1),
        monday = new Date(currentDate.setDate(diff));
      return monday;
    },
    getWeeklyArray: function() {
      let monday = this.getMonday(),
        currentWeek = [];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      for (var i = 0; i < 5; i++) {
        let tempDate = new Date();
        tempDate.setDate(monday.getDate() + i);

        let dateString =
          weekDays[i] +
          " " +
          tempDate.getDate() +
          this.getDateOrdinal(tempDate.getDate()) +
          " " +
          months[tempDate.getMonth()];
        currentWeek.push(dateString);
      }
      return currentWeek;
    },
    getDateOrdinal: function(date) {
      if (date > 3 && date < 21) return "th";
      switch (date % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },
    addMargin: function(endDayTime) {
      if (endDayTime.includes("1700")) {
        console.log("true");
        return "marginRight: 5px";
      }
    },
    generateTaskClasses(task) {
      let color;
      switch (task.clientName) {
        case "Delos":
          color = "#C6F400";
          break;
        case "Shogun World":
          color = "#F48A18";
          break;
        case "Ford":
          color = "#B087FF";
          break;
        case "Logan":
          color = "#1DA4C1";
          break;
        default:
          color = "#1DA4C1";
          break;
      }
      let marginRight;
      task.taskEndTime.includes(1700)
        ? (marginRight = "5px")
        : (marginRight = "0");
      let dynamicStyles = {
        backgroundColor: color,
        gridColumnStart: task.taskStartTime,
        gridColumnEnd: task.taskEndTime,
        marginRight: marginRight
      };
      return dynamicStyles;
    },
    emitTaskDetails: function(task) {
      EventBus.$emit("showTaskDetails", task);
    }
  }
};
</script>

<style scoped>
.weekly-grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0;
  grid-template-columns:
    [Mon0900] 2.5%
    [Mon1000] 2.5%
    [Mon1100] 2.5%
    [Mon1200] 2.5%
    [Mon1300] 2.5%
    [Mon1400] 2.5%
    [Mon1500] 2.5%
    [Mon1600] 2.5%
    [Mon1700] 0%
    [Tues0900] 2%
    [Tues1000] 2%
    [Tues1100] 2%
    [Tues1200] 2%
    [Tues1300] 2%
    [Tues1400] 2%
    [Tues1500] 2%
    [Tues1600] 2%
    [Tues1700] 0%
    [Wed0900] 2.5%
    [Wed1000] 2.5%
    [Wed1100] 2.5%
    [Wed1200] 2.5%
    [Wed1300] 2.5%
    [Wed1400] 2.5%
    [Wed1500] 2.5%
    [Wed1600] 2.5%
    [Wed1700] 0%
    [Thurs0900] 2.5%
    [Thurs1000] 2.5%
    [Thurs1100] 2.5%
    [Thurs1200] 2.5%
    [Thurs1300] 2.5%
    [Thurs1400] 2.5%
    [Thurs1500] 2.5%
    [Thurs1600] 2.5%
    [Thurs1700] 0%
    [Fri0900] 2.5%
    [Fri1000] 2.5%
    [Fri1100] 2.5%
    [Fri1200] 2.5%
    [Fri1300] 2.5%
    [Fri1400] 2.5%
    [Fri1500] 2.5%
    [Fri1600] 2.5%
    [Fri1700] 0%;
}

.weekday {
  height: var(--resource-row-height);
  border-right: 1px var(--dark-grey) solid;
}

.monday {
  grid-column-start: Mon0900;
  grid-column-end: Mon1700;
  border-left: 1px var(--dark-grey) solid;
}

.tuesday {
  grid-column-start: Tues0900;
  grid-column-end: Tues1700;
}

.wednesday {
  grid-column-start: Wed0900;
  grid-column-end: Wed1700;
}

.thursday {
  grid-column-start: Thurs0900;
  grid-column-end: Thurs1700;
}

.friday {
  grid-column-start: Fri0900;
  grid-column-end: Fri1700;
}
</style>