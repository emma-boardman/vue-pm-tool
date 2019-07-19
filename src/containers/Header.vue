<template>
  <header>
    <header-logo></header-logo>
  </header>
</template>

<script>
import Logo from "../components/Logo/Logo";

export default {
  components: {
    HeaderLogo: Logo
  }
};
</script>

<style scoped>
header {
  background-color: var(--dark-grey);
  padding: 0.05% 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
}

header h1 {
  margin-top: 2.7%;
}

@media (min-width: 576px) {
  header {
    padding: 0.05% 1.5%;
  }
  header h1 {
    margin-top: 3%;
  }
}

@media (min-width: 768px) {
  header h1 {
    margin-top: 2%;
  }
}

@media (min-width: 992px) {
  header h1 {
    margin-top: 1%;
  }
}
</style>