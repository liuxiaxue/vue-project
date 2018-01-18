<template>
	<div>
		<button @click="sub">-</button>
		<span class="counter">{{inputValue}}</span>
		<button @click="add">+</button>
		<button @click="slowDown">减速</button>
		<button @click="quick">加速</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				inputValue:0,
				inputStep:10
			}
		},
		methods:{
			sub:function(){
				this.inputValue -= this.inputStep;
			},
			add:function(){
				this.inputValue += this.inputStep;
			},
			slowDown:function(){
				this.inputStep = 1;
			},
			quick:function(){
				this.inputStep = 100;
			}
		}
	}
</script>
<style>
	.counter{
		font-family: LED;  
  		font-size:60px;
	}
</style>