<template>
	<div>
		<layout-modal 
				:if="showTaskAdd" 
				@closeModal="handleTaskAddModalClose" 
				:showModal="showTaskAdd">
			<layout-task-add 
				:formPresets=taskAddFormPresets 
				@submitNewTask="handleFormSubmission"
				@handleEstimate="handleResourceAvailability"></layout-task-add>
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
			taskAddFormPresets: {},
			isTaskPresetsLoaded: false,
			taskAvailability: {}
		}
	},
	created() {
		EventBus.$on('showTaskDetails', this.handleTaskDetailsModalOpen);
		axios
		.get('http://40414669.wdd.napier.ac.uk/inc/readAddTaskOptions.php')
		.then(response => {
			this.taskAddFormPresets = response.data;
			this.isTaskPresetsLoaded = true
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
		},
		handleResourceAvailability: function(resourceAndEstimate){
			console.log("resourceId: " + resourceAndEstimate.resourceId);

			this.getResourceSchedule(resourceAndEstimate.resourceId);
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
				"Mon1700"
			]
			const startTime = "Mon0900";
			const endTime = "Mon1100";
			const estimatedTime = 2;

			console.log("starting availability:" + weeklyAvailability)
			// get index of array 
			 for (let i = 0; i < weeklyTimeSlots.length; i++){
				 if (weeklyTimeSlots[i] == startTime){
					 for (let j = 0; j < estimatedTime; j ++)
					 weeklyAvailability[i + j] = false;
				 }
			 }
			console.log("ending availability:" + weeklyAvailability)

			const estimateArray = Array(estimatedTime).fill(true);
			let indexOfFirstAvailability = this.findAvailability(weeklyAvailability, estimateArray);
			const possibleStartTime = (weeklyTimeSlots[indexOfFirstAvailability]);
			const possibleEndTime = (weeklyTimeSlots[indexOfFirstAvailability + estimatedTime]);
			

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
		getResourceSchedule(resourceId){
			const url = "http://40414669.wdd.napier.ac.uk/inc/readResourceSchedule.php/?id=" + resourceId;
			console.log(url);
			axios
			.get(url)
			.then(response => {
				console.log("response data: " + response.data.data)
				this.taskAvailability = response.data;
			});
		}
	}
}
</script>

<style scoped>

.modal-task-detail >>> .modal {
	padding: 0;
	border: var(--dark-grey) solid 1px;
}

</style>
