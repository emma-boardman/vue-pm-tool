<template>

  <div>
  <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["taskInfo"],
  methods: {
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
        gridRowStart: "row1-start",
        gridRowEnd: "row1-end",
        gridColumnEnd: task.taskEndTime,
        marginRight: marginRight,
        zIndex: 2,
      };
      return dynamicStyles;
    }
  }
};
</script>

<style scoped>
.task {
  border-radius: 6px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid var(--dark-grey);
  box-shadow: 0.5px 1.5px 3px 0px var(--dark-grey);
  height: 12vh
}

p {
  margin: 8px 8px 0 5px;
  text-align: left;
}

.title {
  font-size: 0.6em;
  font-weight: 200;
  text-align: left;
}

.clientName {
  font-size: 0.7em;
  font-weight: 400;
}
</style>