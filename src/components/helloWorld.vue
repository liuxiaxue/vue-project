<template>
	<div>
		<p>数据双向绑定：{{textValue}}</p>
		<input v-model="textValue">
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'helloWorld',
		data(){
			return{
				textValue:'hello World!'
			}
		}
	}
</script>