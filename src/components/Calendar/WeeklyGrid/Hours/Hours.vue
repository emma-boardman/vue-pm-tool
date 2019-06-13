<template>
	<div class="hours">
		<hours-hour>9</hours-hour>
		<hours-hour>10</hours-hour>
		<hours-hour>11</hours-hour>
		<hours-hour>12</hours-hour>
		<hours-hour>13</hours-hour>
		<hours-hour>14</hours-hour>
		<hours-hour>15</hours-hour>
		<hours-hour>16</hours-hour>
		<hours-hour>17</hours-hour>
	</div>
</template>

<script>
	import Hour from './Hour/Hour.vue'

	export default {
		components: {
			hoursHour: Hour
		}
	}
</script>

<style scoped>
.hours {
	display: flex;
	margin: 1px;
	line-height: 0.5em;
	border: 2px cyan solid;
}
</style>