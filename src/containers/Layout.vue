<template>
	<div>
		<layout-modal :if="showTaskAdd" @closeModal="handleAddModalClose" :showModal="showTaskAdd">
			<layout-task-add></layout-task-add>
		</layout-modal>
		<layout-modal :if="showTaskDetail" @closeModal="handleDetailModalClose" :showModal="showTaskDetail">
			<layout-task-detail :task=taskDetail>
			</layout-task-detail>
		</layout-modal>
		<layout-header></layout-header>
		<layout-calendar></layout-calendar>
		<layout-footer @openModal="handleAddModalOpen"></layout-footer>
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

export default {
	data: function(){
		return {
			showTaskAdd: false,
			showTaskDetail: false,
			taskDetail: {}
		}
	},
	mounted() {
		EventBus.$on('showTaskDetails', this.handleTaskDetails); 
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
		handleAddModalClose: function(){
			this.showTaskAdd = false;
		},
		handleAddModalOpen: function(){
			this.showTaskAdd = true;
		},
		handleTaskDetails: function(task){
			this.showTaskDetail = true;
			this.taskDetail = task;

		},
		handleDetailModalClose: function(){
			this.showTaskDetail = false;
		},
	}
}
</script>

<style scoped>

</style>
