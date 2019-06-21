<template>
  <div>
    <modal-backdrop :showModal="showModal" @closeModal="$emit('closeModal')"></modal-backdrop>
    <div class="modal" v-bind:class="[showModal ? 'modal--show' : 'modal--hide']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Backdrop from "../Backdrop/Backdrop.vue";

export default {
  props: {
    showModal: Boolean
  },
  components: {
    modalBackdrop: Backdrop
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 500;
  background-color: #f2f2f2;
  width: 85%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 2.5%;
  left: 7.5%;
  top: 5%;
  box-sizing: border-box;
  transition: all 0.5s ease-out;
  border-radius: 6px;
}

.modal--show {
  transform: translateY(0);
  opacity: 1;
}

.modal--hide {
  transform: translateY(-100vh);
  opacity: 0;
}

@media (min-width: 600px) {
  .modal {
    width: 60%;
    left: calc(50% - 30%);
  }
}
</style>