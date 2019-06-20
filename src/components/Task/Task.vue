<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
</script>

<style scoped>
.task {
  border-radius: 6px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid var(--dark-grey);
  box-shadow: 0.5px 1.5px 3px 0px var(--dark-grey);
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