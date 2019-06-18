<template>
	<div>
		<layout-modal :if="showTaskAdd" @closeModal="handleTaskAddModalClose" :showModal="showTaskAdd">
			<layout-task-add :formPresets=taskAddFormPresets></layout-task-add>
		</layout-modal>
		<layout-modal :if="showTaskDetail" @closeModal="handleTaskDetailModalClose" :showModal="showTaskDetail" class="modal-task-detail">
			<layout-task-detail :task=taskDetail @closeModal="handleTaskDetailModalClose">
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
			isTaskPresetsLoaded: false
		}
	},
	mounted() {
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
	}
}
</script>

<style scoped>

.modal-task-detail >>> .modal {
	padding: 0;
	border: var(--dark-grey) solid 1px;
}

</style>
