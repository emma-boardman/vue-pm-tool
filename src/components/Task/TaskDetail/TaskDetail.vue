
<template>
	<div class="task-detail">
		<div class="task-detail__top-bar" :style="generateClientColourClasses(task.clientName)">
			<p>{{ task.clientName }}</p>
		</div>
		<div class="task-detail__task-content">
			<p>Project: {{ task.projectName }}</p>
			<h3>{{ task.taskTitle }}</h3>
		</div>
	
	</div>

</template> 

<script>
	export default {
		props: ['task'],
		methods: {
			generateClientColourClasses(clientName){
			let color;
				switch(clientName) {
					case 'Client A': 
						color = "#C6F400";
						break;
					case 'Client B': 
						color = "#F48A18"; 
						break;
					case 'Client C': 
						color = "#B087FF";
						break;
					case 'Client D': 
						color = "#1DA4C1";
						break;
					default: 
						color = "#1DA4C1";
						break;
					}
			let backgroundColor = {
				backgroundColor: color
				}
			return backgroundColor
			}
		}
	}

</script> 

<style scoped>

.task-detail {
	text-align: left;
}

.task-detail__top-bar {
	margin: -2.5%;
	padding: 2%;
	font-weight: 400;
	font-size: 0.7em;
	color: var(--dark-grey);
}

.task-detail__top-bar p {
	margin: 0;
}
</style>