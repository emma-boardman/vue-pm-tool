<template>
	<div class="resource-name">
		<h4>{{ name }}</h4>
		<p>{{ job }}</p>
		<p class="contract" v-if="contractType === 'Contract'">{{ contractType }}</p>
	</div>
</template>

<script>
	export default {
		props: ['name', 'job', 'contractType']
	}
</script>

<style>
.resource-name {
	background-color: transparent;
	width: var(--left-column-width);
	box-sizing: border-box;
	height: 100%;
	text-align: left;

}

.resource-name h4 {
	margin-left: 12%;
	margin-bottom: 0;

}

.resource-name p {
	font-size: 0.65em;
	margin: 2% 12%;

}

.contract {
	color: #9B9B9B;
	font-weight: 400;
}
</style>