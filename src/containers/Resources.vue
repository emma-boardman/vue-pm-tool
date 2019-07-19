<template>
  <div class="resources">
    <resources-resource-row
      v-for="resource in resourceTasks"
      :key="resource.resourceId"
      :resourceObj="resource"
    ></resources-resource-row>
  </div>
</template>

<script>
import Resource from "../components/Resource/Resource.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from '../store/types'

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      resourceTasks: types.ALL_TASKS,
      clientResourceTasks: types.CLIENT_TASKS,
      projectList: types.PROJECT_LIST,
      resourceList: types.RESOURCE_LIST
    })
  },
  created() {
    fetchResourceTasks: {
      this.$store.dispatch('fetchResourceTasks')
    }
    fetchClientResourceTasks: {
      this.$store.dispatch('fetchClientResourceTasks')
    }
    fetchTaskOptions: {
      this.$store.dispatch('fetchTaskOptions')
    }
  },
  methods: {
    ...mapActions(['fetchResourceTasks', 'fetchClientResourceTasks', 'fetchTaskOptions']),
  },
  components: {
    ResourcesResourceRow: Resource
  }
};
</script>

<style scoped>
.resources {
  display: flex;
  flex-direction: column;
}

.resources > div:nth-child(odd) {
  background: rgb(242, 242, 242);
  background: linear-gradient(
    0deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(237, 237, 237, 1) 100%
  );
}

.resources > div:nth-child(even) {
  background: rgb(227, 228, 229);
  background: linear-gradient(
    0deg,
    rgba(227, 228, 229, 1) 0%,
    rgba(223, 223, 223, 1) 100%
  );
}
</style>