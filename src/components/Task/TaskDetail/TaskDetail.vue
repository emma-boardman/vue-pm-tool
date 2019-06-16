
<template>
	<div class="task-detail">
		<div class="task-detail__top-bar" :style="generateClientColourClasses(task.clientName)">
			<div>{{ task.clientName }}</div> <div class="task-detail__top-bar__close-btn" @click="$emit('closeModal')">x</div>
		</div>
		<div class="task-detail__task-content">
			<p class="task-detail__task-content__task-title">
				{{ task.taskTitle }} <span class="task-detail__task-content--impact" :style="generateImpactColourClasses(task.impact)">{{ task.impact}}</span></p>
			<dl>
				<dt>Project</dt><dd> {{ task.projectName }}</dd>
				<dt>Error</dt>
				<dd>{{ task.error }}</dd>
				<dt>Scheduled for</dt>
				<dd>{{ task.startDayTime }} - {{ task.endDayTime }}</dd>
			</dl>
			
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
			},
			generateImpactColourClasses(impact){
			let color;
				switch(impact) {
					case 'low':
						color = "#CFDBC5";
						break;
					case 'medium':
						color = "#FBEC5D";
						break;
					case 'high':
						color = "#FF6A6A";
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
	padding: 2%;
	font-weight: 400;
	font-size: 0.7em;
	color: var(--dark-grey);
	border-radius: 6px 6px 0 0;
	display: flex;
	justify-content: space-between;
}

.task-detail__top-bar > div {
	margin: 0 2% 0 2%;
}

.task-detail__top-bar__close-btn {
	text-align: right;
}

.task-detail__task-content {
	padding: 4%;
	display: flex;
	flex-direction: column;
	color: var(--dark-grey);
}

.task-detail__task-content__task-title {
	font-weight: 400;
	margin-bottom: 2%;
}
.task-detail__task-content dt {
	font-size: 0.8em;
	font-weight: 600;
	margin-bottom: 2%;
}

.task-detail__task-content dd {
	margin-left: 2%;
	margin-bottom: 4%;
	font-size: 0.85em;
}

.task-detail__task-content--impact {
	background-color: pink;
	padding: 2% 3% 2% 3%;
	width: 20%;
	text-align:center;
	border-radius: 3px;
	font-weight: 400;
	font-size: 0.7em;
	border: var(--dark-grey) solid 0.5px;
	margin-left: 2%;
}
</style>