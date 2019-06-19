<template>
	<div class="scrolling-wrapper">
		<div class="wrapper">
			<calendar-row-headers></calendar-row-headers>
			<calendar-resources @openTaskDetails="$emit('openTaskDetails', task)" :isNewTaskAdded="isNewTaskAdded"></calendar-resources>
		</div>
	</div>
</template>

<script>
	import RowHeaders from './RowHeaders/RowHeaders.vue'
	import Resources from '../../containers/Resources.vue'

	export default {
		props: ["isNewTaskAdded"],
		components: {
			calendarRowHeaders: RowHeaders,
			calendarResources: Resources
		}

	}
</script> 

<style scoped>
.scrolling-wrapper {
  height: 86vh;
  margin-top: 8vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.wrapper {
    flex: 0 0 auto;
}

.row-header {
	top: 0;
}

@media (min-width: 992px){
	.wrapper {
		width: 100%;
	}
}
</style>