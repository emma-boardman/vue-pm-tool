<template>
  <div :style="[taskInformation.styles, generateTaskClasses(taskInformation)]">
    <slot></slot>
  </div>
</template>



<script>
export default {
  props: {
    taskInformation: Object,
    style: Object
  },
  data() {
    return {
    };
  },
  methods: {
generateTaskClasses: function(task) {
		var t0 = performance.now();
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
		let dynamicStyles = {
		  backgroundColor: color,
		};
		var t1 = performance.now();
		console.log(
		  "Call to generateTaskClasses took " + (t1 - t0) + " milliseconds."
		);
		return dynamicStyles;
    }
    }
  }
    
</script>

<style scoped>
.task {
  border-radius: 6px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid var(--dark-grey);
  box-shadow: 0.5px 1.5px 3px 0px var(--dark-grey);
  height: 12vh;
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