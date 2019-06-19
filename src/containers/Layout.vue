<template>
	<div>
		<layout-modal 
				:if="showTaskAdd" 
				@closeModal="handleTaskAddModalClose" 
				:showModal="showTaskAdd">
			<layout-task-add 
				:projects="this.projectsList"
				:resources="this.resourceList"
				@submitNewTask="handleFormSubmission"
				@handleEstimate="getResourceSchedule"
				@closeModal="handleTaskAddModalClose" 
				:availableTimes="{startTime: this.firstAvailableStartTime, endTime: this.firstAvailableEndTime}"></layout-task-add>
		</layout-modal>
		<layout-modal 
				:if="showTaskDetail" 
				@closeModal="handleTaskDetailModalClose" 
				:showModal="showTaskDetail" 
				class="modal-task-detail">
			<layout-task-detail 
					:task=taskDetail 
					@closeModal="handleTaskDetailModalClose">
			</layout-task-detail>
		</layout-modal>
		<layout-header></layout-header>
		<layout-calendar></layout-calendar>
		<layout-footer @openModal="handleTaskAddModalOpen"></layout-footer>
	</div>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Calendar from '../components/Calendar/Calendar.vue'
import Footer from '../components/Footer/Footer.vue'
import Modal from '../components/UI/Modal/Modal.vue'
import TaskAdd from '../components/Task/TaskAdd/TaskAdd.vue'
import TaskDetail from '../components/Task/TaskDetail/TaskDetail.vue'
import { EventBus } from '../event-bus.js'
import axios from 'axios'

export default {
	data: function(){
		return {
			showTaskAdd: false,
			showTaskDetail: false,
			taskDetail: {},
			taskAvailability: {},
			firstAvailableStartTime: '',
			firstAvailableEndTime: '',
			projectsList: [],
			resourceList: []
		}
	},
	created() {
		EventBus.$on('showTaskDetails', this.handleTaskDetailsModalOpen);
		axios
		.get('http://40414669.wdd.napier.ac.uk/inc/readAddTaskOptions.php')
		.then(response => {
			this.projectsList = response.data["clientProjects"];
			this.resourceList = response.data["resources"];
			this.handleTaskPresets();	
		})
		.catch(error => console.log(error))
	},
	components: {
		layoutHeader: Header,
		layoutCalendar: Calendar,
		layoutFooter: Footer,
		layoutModal: Modal,
		layoutTaskAdd: TaskAdd,
		layoutTaskDetail: TaskDetail
	},
	methods: {
		handleTaskPresets: function(){
			let projectsArray = this.projectsList.reduce(function (formPresetsArray, clientObj){
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
				this.projectsList = projectsArray;
		},
		handleTaskAddModalClose: function(){
			this.showTaskAdd = false;
		},
		handleTaskAddModalOpen: function(){
			this.showTaskAdd = true;
		},
		handleTaskDetailsModalOpen: function(task){
			this.showTaskDetail = true;
			this.taskDetail = task;
		},
		handleTaskDetailModalClose: function(){
			this.showTaskDetail = false;
		},
		handleFormSubmission: function(task){
			console.log(task);
			this.handleTaskAddModalClose();
		},
		handleResourceAvailability: function(resourceAndEstimate){
			const weeklyAvailability = Array(9).fill(true);
			const weeklyTimeSlots = [
				"Mon0900",
				"Mon1000",
				"Mon1100",
				"Mon1200",
				"Mon1300",
				"Mon1400",
				"Mon1500",
				"Mon1600",
				"Mon1700",
				"Tues0900",
				"Tues1000",
				"Tues1100",
				"Tues1200",
				"Tues1300",
				"Tues1400",
				"Tues1500",
				"Tues1600",
				"Tues1700",
				"Wed0900",
				"Wed1000",
				"Wed1100",
				"Wed1200",
				"Wed1300",
				"Wed1400",
				"Wed1500",
				"Wed1600",
				"Wed1700",
				"Thurs0900",
				"Thurs1000",
				"Thurs1100",
				"Thurs1200",
				"Thurs1300",
				"Thurs1400",
				"Thurs1500",
				"Thurs1600",
				"Thurs1700",
				"Fri0900",
				"Fri1000",
				"Fri1100",
				"Fri1200",
				"Fri1300",
				"Fri1400",
				"Fri1500",
				"Fri1600",
				"Fri1700",
			
			]
			if (this.taskAvailability.length > 0){
			
				for (let n = 0; n < this.taskAvailability.length; n++) {
					const startTime = this.taskAvailability[n].taskStartTime;
					const estimatedTime = this.taskAvailability[n].taskEstimate;
					for (let i = 0; i < weeklyTimeSlots.length; i++){
						if (weeklyTimeSlots[i] == startTime){
							for (let j = 0; j < estimatedTime; j ++){
							weeklyAvailability[i + j] = false;
							}
						}
					 }
				}
			}
			console.log(weeklyAvailability);
			const estimateArray = Array(resourceAndEstimate.taskEstimate).fill(true);
			let indexOfFirstAvailability = this.findAvailability(weeklyAvailability, estimateArray);
			this.firstAvailableStartTime = (weeklyTimeSlots[indexOfFirstAvailability]);
			const endTime = parseInt(indexOfFirstAvailability) + parseInt(resourceAndEstimate.taskEstimate);
			this.firstAvailableEndTime = (weeklyTimeSlots[endTime]);
		},
		findAvailability(arr, subarr) {
    	for (var i = 0; i < 1 + (arr.length - subarr.length); i++) {
        var j = 0;
        for (; j < subarr.length; j++)
            if (arr[i + j] !== subarr[j])
                break;
        if (j == subarr.length)
            return i;
			}
			return -1;
		},
		getResourceSchedule(resourceAndEstimate){
			const url = "http://40414669.wdd.napier.ac.uk/inc/readResourceSchedule.php/?id=" + resourceAndEstimate.resourceId;
			console.log(url);
			axios
			.get(url)
			.then(response => {
				this.taskAvailability = response.data.data;
				this.handleResourceAvailability(resourceAndEstimate);
			});
		}
	}
}
</script>

<style scoped>

.modal-task-detail >>> .modal {
	padding: 0;
	top: 10%;
	border: var(--dark-grey) solid 1px;
}

</style>
