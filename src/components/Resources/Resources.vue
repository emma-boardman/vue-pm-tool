<template>
	<div class="resources">
		<resources-resource-row 
			v-for="resource in resources" 
			:key="resource.name"
			:resourceObj="resource"
			></resources-resource-row>
	</div>
</template>

<script>
	import Resource from './Resource/Resource.vue'

	export default {
		data: function() {
			return {
			resources: [
				 {
					id: "001",
					name: "Bernard",
					role: "Back End Developer",
					contractType: "Full time",
					assignedTasksCurrentWeek: [
						{   
							taskid: "t001",
							projectName: "Marketing MicroSite",
							clientName: "Client A",
							clientCode: "ClntA",
							taskTitle: "Fix layered navigation",
							error: "Search results not reducing when filters applied",
							impact: "low",
							startDayTime: "Mon0900",
							endDayTime: "Mon1300",
							estimatedHours: "4"
						}, {
							taskid: "t002",
							projectName: "e-Commerce build 2.0",
							clientName: "Client B",
							clientCode: "ClntB",
							taskTitle: "Tablet layout improvements",
							error: "Banners extending off page on iPad 2.2",
							impact: "low",
							startDayTime: "Mon1300",
							endDayTime: "Mon1700",
							estimatedHours: "4"
						}, {
							taskid: "t003",
							projectName: "Main Store",
							clientName: "Client C",
							clientCode: "ClntC",
							taskTitle: "Schedule hero banner changes",
							error: "Unable to schedule banner changes",
							impact: "medium",
							startDayTime: "Tues0900",
							endDayTime: "Tues1500",
							estimatedHours: "6"
						}
					]
				}, {
					id: "002",
					name: "Dolores",
					role: "Graphic Design",
					contractType: "Full time",
					assignedTasksCurrentWeek: [
						{   
							taskid: "t004",
							projectName: "Marketing MicroSite",
							clientName: "Client C",
							clientCode: "ClntC",
							taskTitle: "Fix layered navigation",
							error: "Search results not reducing when filters applied",
							impact: "low",
							startDayTime: "Mon0900",
							endDayTime: "Mon1100",
							estimatedHours: "2"
						}, {
							taskid: "t005",
							projectName: "e-Commerce build 2.0",
							clientName: "Client A",
							clientCode: "ClntA",
							taskTitle: "Tablet layout improvements",
							error: "Banners extending off page on iPad 2.2",
							impact: "low",
							startDayTime: "Mon1100",
							endDayTime: "Mon1700",
							estimatedHours: "6"
						}, {
							taskid: "t006",
							projectName: "Main Store",
							clientName: "Client D",
							clientCode: "ClntD",
							taskTitle: "Schedule hero banner changes",
							error: "Unable to schedule banner changes",
							impact: "medium",
							startDayTime: "Tues0900",
							endDayTime: "Tues1600",
							estimatedHours: "7"
						}
					],
					unavailableCurrentWeek: [
						{
							naId: "na001",
							reason: "holiday",
							startDayTime: "Wed0900",
							endDayTime: "Thurs1700"
						}
					]
				}, {
					id: "003",
					name: "Teddy",
					role: "Front End Developer",
					contractType: "Contract",
					assignedTasksCurrentWeek: [
						{   
							taskid: "t007",
							projectName: "Marketing MicroSite",
							clientName: "Client B",
							clientCode: "ClntB",
							taskTitle: "Fix layered navigation",
							error: "Search results not reducing when filters applied",
							impact: "low",
							startDayTime: "Tues0900",
							endDayTime: "Tues1700",
							estimatedHours: "8"
						}, {
							taskid: "t008",
							projectName: "e-Commerce build 2.0",
							clientName: "Client D",
							clientCode: "ClntD",
							taskTitle: "Tablet layout improvements",
							error: "Banners extending off page on iPad 2.2",
							impact: "low",
							startDayTime: "Wed0900",
							endDayTime: "Wed1700",
							estimatedHours: "8"
						}
					],
					unavailableCurrentWeek: [
						{
							naId: "na002",
							reason: "not contracted",
							startDayTime: "Mon0900",
							endDayTime: "Mon1700"
						}, {
							naId: "na003",
							reason: "not contracted",
							startDayTime: "Thurs0900",
							endDayTime: "Fri1700"
						}
					]
				}
		]
	}
},
		components: {
			ResourcesResourceRow: Resource
		} 
	}

</script>

<style scoped>
.resources {
	display: flex;
	flex-direction: column;
}

.resources > div:nth-child(odd){
background: rgb(242,242,242);
background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(237,237,237,1) 100%);
}

.resources > div:nth-child(even){
background: rgb(227,228,229);
background: linear-gradient(0deg, rgba(227,228,229,1) 0%, rgba(223,223,223,1) 100%);
}

</style>