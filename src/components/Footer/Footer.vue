<template>
	<footer>
		<footer-add-button @openModal="$emit('openModal')"></footer-add-button>
	</footer>
</template>

<script>
	import AddButton from './AddButton/AddButton.vue'

	export default {
		components: {
			footerAddButton: AddButton
		}
	}
</script>

<style scoped>
footer {
		background-color: var(--dark-grey);
		bottom: 0;
		position: fixed;
		height: 7vh;
		width: 100%;
	}
</style>