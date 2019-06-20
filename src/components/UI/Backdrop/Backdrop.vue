<template>
  <div class="backdrop" v-show="showModal" @click="handleModalClose"></div>
</template>

<script>
import { store } from "../../../utils/store.js";

export default {
  props: ["showModal"],
  methods: {
    handleModalClose: function() {
      store.hideAddTaskForm();
    }
  }
};
</script>

<style scoped>
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>