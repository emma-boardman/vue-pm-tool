<template>
  <div class="day-date">
    <div class="day">
      <p>
        <slot></slot>
      </p>
    </div>
    <day-date-hours></day-date-hours>
  </div>
</template>

<script>
import Hours from "../Hours/Hours.vue";

export default {
  components: {
    DayDateHours: Hours
  }
};
</script>

<style scoped>
.day-date {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.day-date p {
  background-color: transparent;
  font-size: 0.7em;
  margin: 0;
  margin-top: 13px;
}

@media (min-width: 992px) {
  .day-date p {
    margin-top: 10px;
  }
}
</style>
