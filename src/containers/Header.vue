<template>
  <header>
    <router-link to="/pm">
      <header-logo></header-logo>
    </router-link>

    <router-link :to="ustLink">
      <div v-if="isPM">
        <header-notification v-if="unscheduledTasks.length >= 1" user="pm" unscheduledtasks="true" />
        <header-notification v-else user="pm" :unscheduledtasks=false />
      </div>
      <div v-else>
        <header-notification
          v-if="unscheduledTasks.length >= 1"
          user="client"
          unscheduledtasks="true"
        />
        <header-notification v-else user="client" unscheduledtasks="false" />
      </div>
    </router-link>
  </header>
</template>

<script>
import Logo from "../components/Logo/Logo";
import Notification from "../components/Notification/Notification";
import { mapGetters, mapMutations, mapActions } from "vuex";
import * as types from "../store/types";

export default {
  computed: {
    ...mapGetters({
      unscheduledTasks: types.UNSCHEDULED_TASKS
    }),
    ustLink: function() {
      return this.$route.path + "/unscheduledtasks";
    },
    isPM: function() {
      if (this.$route.path === "/pm") {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    fetchUnscheduledTasks: this.$store.dispatch("fetchUnscheduledTasks");
  },
  methods: {
    ...mapActions(["fetchUnscheduledTasks"])
  },
  components: {
    HeaderLogo: Logo,
    HeaderNotification: Notification
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
header h1 {
  margin-top: 9%;
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