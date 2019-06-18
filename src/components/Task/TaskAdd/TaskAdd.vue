<template>
	<div class="add-task">
	<h2>Add New Task</h2>
    
	<form @submit.prevent="$emit('submitNewTask', task)"> 
		<ul class="form-wrapper">
			<li class="form-row">
				<label for="projectId">Project</label>
					<select
							id="taskProject"
							v-model="task.taskProject"
							required
						>
						<option v-for="project in projects" :key="project.projectId">
							{{ project.clientName + ": " + project.projectName }} 
						</option>
					</select>
			</li>
			<li class="form-row">
				<label for="taskTitle">Task Title</label>
				<input 
						type="text" 
						id="taskTitle" 
						v-model="task.taskTitle"
						required />
			</li>
			<li class="form-row">
				<label for="taskArea">Affected area</label>
				<input 
						type="text" 
						id="taskArea" 
						v-model="task.taskAffectedArea"
						required/>
			</li>
			<li class="form-row-text-area">
				<label for="taskError">Erroneous behaviour</label>
				<textarea 
						id="taskError" 
						v-model="task.taskError" 
						required />
			</li>
				<li class="form-row-text-area">
				<label for="taskExpected">Expected behaviour</label>
				<textarea 
						id="taskExpected"
						v-model="task.taskExpected"
						required />
			</li>
			<li class="form-row">
				<label for="taskImpact">Impact on business</label>
				<select 
						id="taskImpact"
						v-model="task.taskImpact"
						required>
					<option v-for="impact in task.impactOptions" :key="impact">
						{{ impact }}
					</option>
				</select>
					
			</li>
			<li class="form-row">
				<label for="taskTimeNoticed">Time noticed</label>
				<input 
						type="text" 
						id="taskTimeNoticed"
						v-model="task.taskTimeNoticed"
						required />
			</li>
			<li class="form-row">
				<label for="taskRecentChanges">Recent Changes</label>
				<input 
						type="text" 
						id="taskRecentChanges"
						v-model="task.taskRecentChanges" 
						required />
			</li>
				<li class="form-row">
				<label for="resourceId">Resource</label>
					<select 
							id="resourceId"
							v-model="task.taskResource"
							required>
						<option 
							v-for="resource in formPresets['resources']" 
							:key="resource.resourceId" 
							:value="resource.resourceId">
							{{ resource.resourceName }} 
						</option>
					</select>
			</li>
			<li class="form-row">
				<label for="taskEstimate">Estimate</label>
				<input 
						type="number" 
						id="taskEstimate"
						v-model="task.taskEstimate"
						@blur="$emit('handleEstimate', {resourceId: task.taskResource, taskEstimate: task.taskEstimate})"
						required />
			</li>
			<li class="form-row">
				<label for="taskSchedule">Schedule Time Slot</label>
					<select>
						<option value="timenoselection"></option>
						<option value="Mon9000Mon1200">Monday 1st June 09:00 - 12:00</option>
						<option value="Wed1400Wed1700">Wednesday 3rd June 14:00 - 17:00</option>
						<option value="Thurs9000Thurs1200">Thursday 4th June 09:00 - 12:00</option>
					</select>
			</li>
		</ul>
		<button type="submit" class="add-task-btn">Add Task</button>
		<p class="cancel-btn">Cancel</p>
	</form>
		
    </div>

</template>

<script>
	export default {
		props: ['formPresets'],
		data() {
			return {
				task: {
					taskProject: '',
					taskTitle: '',
					taskAffectedArea: '',
					taskError: '',
					taskExpected: '',
					taskImpact: 'low',
					taskTimeNoticed: '',
					taskRecentChanges: '',
					taskResource: '',
					taskResourceId: '',
					taskEstimate: '',
					taskTimeSlot: '',
					impactOptions: ['Low', 'High', 'Medium']
				},
				projects: []
			}
		},
		computed: {
		projects: function() {
				return this.parseProjects();
			}
		},
		created() {
					let projectsArray = this.formPresets["clientProjects"].reduce(function (formPresetsArray, clientObj){
					for (let j = 0; j < clientObj.projects.length; j++){
						let clientObject = {
							clientName: clientObj.clientName,
							projectName: clientObj.projects[j].projectTitle,
							projectId: clientObj.projects[j].projectId
						}
						formPresetsArray.push(clientObject);
					}
					return formPresetsArray;
				}, []);
				this.projects = projectsArray;
			}
		}
</script>

<style scoped>
.add-task {
	padding: 3%;
	padding-bottom: 0;
}

h2 {
	text-align: left;
	margin-top: 0;
}

.form-wrapper {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.form-row {
	display: flex;
	justify-content: space-between;
	padding: 3% 0%;
}

.form-row-text-area {
	display: flex;
	flex-direction: column;
	padding: 3% 0% 2% 0%;
}

.form-row > label, .form-row-text-area > label {
	text-align: left;
	font-size: 0.8em;
}

.form-row-text-area > textarea {
	margin-top: 1.8%;
}

.form-row > select {
	width: 50%;
}


.form-row > input, .form-row-text-area > textarea, .form-row > select{
	background-color: #D8D8D8;
	border: solid 1px #979797;
	border-radius: 4px;
	font-size: 0.8em;
	padding: 0.5%;
}

button {
	background-color: #C7F228;
	padding: 4% 10%;
	border: black solid 1px;
	border-radius: 6px;
	font-size: 1em;
	font-weight: 600;
	margin-top: 10%;
}

.cancel-btn {
	font-size: 0.7em;
	margin-bottom: 1%;
}



</style>
