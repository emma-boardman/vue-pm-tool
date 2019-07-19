<template>
  <div class="add-button-wrapper">
    <img @click="handleAddTaskClick" src="../../../assets/addButton.svg">
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from '../../../store/types'


export default {
  methods: {
    ...mapMutations({
      handleAddTaskClick: types.MUTATE_SHOW_TASK_NEW
    })
    }
  }
</script>

<style scoped>
.add-button-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.add-button-wrapper > img {
  height: 3.5vh;
  margin: 3%;
}

@media (min-width: 768px) {
  .add-button-wrapper > img {
    margin: 2%;
  }
}

@media (min-width: 992px) {
  .add-button-wrapper > img {
    margin: 1.7%;
  }
}

@media (min-width: 1200px) {
  .add-button-wrapper > img {
    margin: 1%;
  }
}
</style>