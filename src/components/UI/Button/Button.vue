<template>
    <button><slot></slot></button>
</template>

<script>
export default {
    props: {
        type: String
    }
}
</script>

<style scoped>
button {
	background-color: #C7F228;
	padding: 4% 10%;
	border: black solid 1px;
	border-radius: 6px;
	font-size: 1em;
	font-weight: 600;
	margin-top: 10%;
}
</style>
