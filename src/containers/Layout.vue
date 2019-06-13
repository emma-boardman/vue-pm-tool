<template>
	<div>
		<layout-modal :if="show" @closeModal="handleModalClose" :showModal="show">
			<layout-add-task></layout-add-task>
		</layout-modal>
		<layout-header></layout-header>
		<layout-calendar></layout-calendar>
		<layout-footer @openModal="handleModalOpen"></layout-footer>
	</div>
</template>

<script>

import Header from '../components/Header/Header.vue'
import Calendar from '../components/Calendar/Calendar.vue'
import Footer from '../components/Footer/Footer.vue'
import Modal from '../components/UI/Modal/Modal.vue'
import AddTask from '../components/AddTask/AddTask.vue'

export default {
	data: function(){
		return {
			show: false
		}
	},
	components: {
		layoutHeader: Header,
		layoutCalendar: Calendar,
		layoutFooter: Footer,
		layoutModal: Modal,
		layoutAddTask: AddTask
	},
	methods: {
		handleModalClose: function(){
			this.show = false;
		},
		handleModalOpen: function(){
			this.show = true;
		}

	}
}



</script>

<style>

</style>
