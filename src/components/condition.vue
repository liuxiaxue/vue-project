<template>
	<div>
		<h2>Hello,Vue.js?</h2>
		<h2 v-show="yes1">Yes</h2>
		<h2 v-show="no1">No</h2>

		<h3>Hello,Angular.js?</h3>
		<h3 v-if="yes2">Yes</h3>
		<h3 v-if="no2">No</h3>
		
		<h1>---------------------------</h1>
		<h3 v-if="yes1">Hello,Vue.js!</h3>
		<h3 v-else>Hello,Angular.js!</h3>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				yes1:true,
				no1:false,
				yes2:false,
				no2:true
			}
		}
	}
</script>