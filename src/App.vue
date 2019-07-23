<template>
  <div class="app">
    <router-view />
    <!-- <app-layout></app-layout> -->
    <!-- <app-auth></app-auth> -->
  </div>
</template>

<script>
import Layout from './containers/Layout.vue'
import Auth from './containers/Auth.vue'

export default {
  components: {
    appLayout: Layout,
    appAuth: Auth
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.app {
  text-align: center;
}

:root {
  --dark-grey: #4A4A4A;
  --body-font: open-sans, sans-serif;
  --left-calendar-axis-width: 10%;
  --left-column-width: 25vw;
  --resource-row-height: 14vh;
}

body {
  font-family: var(--body-font);
  letter-spacing: 0.02em;
  font-weight: 200;
  margin:0;
  height: 100%;
}

</style>
