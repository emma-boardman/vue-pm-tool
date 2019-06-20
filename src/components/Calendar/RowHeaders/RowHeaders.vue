<template>
  <div class="row-headers">
    <div class="empty"></div>
    <row-headers-weekly-grid></row-headers-weekly-grid>
  </div>
</template>

<script>
import WeeklyGrid from "../WeeklyGrid/WeeklyGrid.vue";
import DayDate from "../WeeklyGrid/DayDate/DayDate.vue";

export default {
  components: {
    rowHeadersWeeklyGrid: WeeklyGrid,
    rowHeadersDayDate: DayDate
  }
};
</script>

<style scoped>
.row-headers {
  display: flex;
  height: 6%;
  background-color: #d8d8d8;
}

.week {
  display: flex;
}

.empty {
  width: var(--left-column-width);
  box-sizing: border-box;
}

/deep/ .weekday .hours {
  visibility: hidden;
}
</style>