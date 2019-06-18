<template>
	<div class="add-task">
	<h2>Add New Task</h2>

	{{ projects }}

	<form>
		<ul class="form-wrapper">
			<li class="form-row">
				<label for="projectId">Project</label>
					<select>
						<option value="projnoselection"></option>
						<option value="proj1">Proj1</option>
						<option value="proj2">Proj2</option>
						<option value="proj3">Proj3</option>
					</select>
			</li>
			<li class="form-row">
				<label for="taskTitle">Task Title</label>
				<input type="text" id="taskTitle" />
			</li>
			<li class="form-row">
				<label for="taskArea">Affected area</label>
				<input type="text" id="taskArea" />
			</li>
			<li class="form-row-text-area">
				<label for="taskError">Erroneous behaviour</label>
				<textarea />
			</li>
				<li class="form-row-text-area">
				<label for="taskNormal">Expected behaviour</label>
				<textarea />
			</li>
			<li class="form-row">
				<label for="taskImpact">Impact on business</label>
				<input type="text" id="taskImpact" />
			</li>
			<li class="form-row">
				<label for="taskProblemSince">Time noticed</label>
				<input type="text" id="taskProblemSince" />
			</li>
			<li class="form-row">
				<label for="taskRecentChanges">Recent Changes</label>
				<input type="text" id="taskRecentChanges" />
			</li>
				<li class="form-row">
				<label for="resourceId">Resource</label>
					<select>
						<option value="resourcenoselection"></option>
						<option value="res1">Bernard</option>
						<option value="res2">Dolores</option>
						<option value="res3">Teddy</option>
					</select>
			</li>
			<li class="form-row">
				<label for="taskEstimate">Estimate</label>
				<input type="text" id="taskEstimate" />
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
	</form>
		<button class="add-task-btn">Add Task</button>
		<p class="cancel-btn">Cancel</p>
    </div>

</template>

<script>
	export default {
		props: ['formPresets'],
		data() {
			return {
			}
		},
		computed: {
		projects: function() {
				let eh = this.formPresets["clientProjects"].reduce(function (formPresetsArray, clientObj){
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
				return eh;
			}
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
