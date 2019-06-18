<template>
	<div v-if="isDataLoaded" class="resources">
			<resources-resource-row 
			v-for="resource in info" 
			:key="resource.resourceId"
			:resourceObj="resource"
			></resources-resource-row>
			
	</div>
</template>

<script>
	import Resource from '../components/Resource/Resource.vue'
	import axios from 'axios';

	export default {
		data: function() {
			return {
			task: '',
			info: null,
			isDataLoaded: false
	}
},
	mounted(){
			axios
			.get('http://40414669.wdd.napier.ac.uk/inc/readTaskDetails.php')
			.then(response => {
				this.info = response.data.data;
				this.isDataLoaded = true;
			})
			.catch(error => console.log(error))
		},
		components: {
			ResourcesResourceRow: Resource
		}
	}

</script>

<style scoped>
.resources {
	display: flex;
	flex-direction: column;
}

.resources > div:nth-child(odd){
background: rgb(242,242,242);
background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(237,237,237,1) 100%);
}

.resources > div:nth-child(even){
background: rgb(227,228,229);
background: linear-gradient(0deg, rgba(227,228,229,1) 0%, rgba(223,223,223,1) 100%);
}

</style>