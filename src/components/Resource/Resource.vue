<template>
  <div class="resource">
    <resource-resource-name
      :name="resourceObj.resourceName"
      :job="resourceObj.resourceJobTitle"
      :contractType="resourceObj.resourceContractType"
    ></resource-resource-name>
    <resource-weekly-grid
      class="resource-weekly-grid"
      :tasks="tasks"
      @openTaskDetails="handleTaskClick"
    >
    </resource-weekly-grid>
  </div>
</template>

<script>
import ResourceName from "./ResourceName/ResourceName.vue";
import WeeklyGrid from "../Calendar/WeeklyGrid/WeeklyGrid.vue";
 import { store } from '../../utils/store.js';

export default {
  props: {
    resourceObj: Object
  },
  data() {
    return {
    }
  },
    computed: {
    tasks: function() {
      return this.resourceObj.tasks;
    }
  },
  components: {
    ResourceResourceName: ResourceName,
    ResourceWeeklyGrid: WeeklyGrid
  },
  methods: {
    handleTaskClick: function(task) {
      var t0 = performance.now();
      console.log(task);
      var t1 = performance.now();
      console.log("Call to handleTaskClick took " + (t1 - t0) + " milliseconds.");
    }
  }
};
</script>

<style scoped>
.resource {
  display: flex;
  height: var(--resource-row-height);
  border-top: grey 1px solid;
  width: 100%;
  background-color: transparent;
}

/deep/ .weekday p {
  visibility: hidden;
}

/deep/ .weekday .hours {
  visibility: hidden;
}
</style>