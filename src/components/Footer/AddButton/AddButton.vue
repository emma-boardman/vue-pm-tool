<template>
	<div class="add-button-wrapper">
		<!-- <img @click="$emit('openModal')" src="../../../assets/addButton.svg"> -->
		<img @click="handleAddTaskClick" src="../../../assets/addButton.svg">
	</div>
</template>

<script>
import { store } from "../../../utils/store.js"

	export default {
		methods: {
			handleAddTaskClick: function() {
				console.log("check point 1");
				store.showAddTaskForm();
				console.log("check point 2");
			}
		}

	}
</script>

<style scoped>
.add-button-wrapper {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.add-button-wrapper > img {
	height: 3.5vh;
	margin: 3%;
}

@media (min-width: 768px){
	.add-button-wrapper > img {
		margin: 2%;
	}
}

@media (min-width: 992px){
	.add-button-wrapper > img {
		margin: 1.7%;
	}
}

@media (min-width: 1200px){
	.add-button-wrapper > img {
		margin: 1%;
	}
}
</style>