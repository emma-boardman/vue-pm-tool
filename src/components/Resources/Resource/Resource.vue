<template>
	<div class="resource">
		<resource-resource-name :name="resourceObj.name" :job="resourceObj.role" :contractType="resourceObj.contractType"></resource-resource-name>
		<resource-weekly-grid class="resource-weekly-grid" :tasks="resourceObj.assignedTasksCurrentWeek" @openTaskDetails="test">
	    </resource-weekly-grid>
	</div>
</template>


<script>
	import ResourceName from './ResourceName/ResourceName.vue'
	import WeeklyGrid from '../../Calendar/WeeklyGrid/WeeklyGrid.vue'
	export default {
		props: ['resourceObj'],
		components: {
			ResourceResourceName: ResourceName,
			ResourceWeeklyGrid: WeeklyGrid
		},
		methods: {
			test: function() {
				console.log("Click received");
			}
		}

	}
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