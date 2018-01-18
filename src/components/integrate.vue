<template>
	<div>
		<div class="myForm">
			<span>Create New Person</span>
			<div class="input-group">
				<label>Name:</label>
				<input type="text" v-model="name">
			</div>
			<div class="input-group">
				<label>Age:</label>
				<input type="number" v-model="age">
			</div>
			<div class="input-group">
				<label>Sex:</label>
				<select v-model="sex">
					<option>Male</option>	
					<option>Female</option>
				</select>
			</div>
			<div class="input-group">
				<button @click="createItem">Create</button>
			</div>
		</div>
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Sex</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(data,index) in dataList">
						<td>{{data.name}}</td>
						<td>{{data.age}}</td>
						<td>{{data.sex}}</td>
						<td>
							<button @click="deleteItem(index)">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				dataList:[
					{
						name:'Jack',
						age:30,
						sex:'Male'
					},
					{
						name:'Bill',
						age:26,
						sex:'Male'
					},
					{
						name:'Tracy',
						age:22,
						sex:'Female'
					},
					{
						name:'Chirs',
						age:34,
						sex:'Female'

					}
				],
				name:'',
				age:'',
				sex:'Male'
			}
		},
		methods:{
			createItem:function(){
				// debugger;
				this.dataList.push({
					name:this.name,
					age:this.age,
					sex:this.sex
				});
				this.name = "";
				this.age = "";
				this.sex = "Male";
			},
			deleteItem:function(index){
				this.dataList.splice(index,1);
			}
		}
	}
</script>

<style>
	.myForm{
		width:400px;
		height:200px;
		border:1px solid #ccc;
		margin-top:20px;
	}
	.myForm span{
		position: relative;
	    top: -11px;
	    left: 12px;
	    background-color: #fff;
	    padding:0 4px;
	}
	.myForm .input-group:nth-child(1){
		margin-top:30px;
	}
	.myForm .input-group{
		width:70%;
		height:40px;
		margin:0 auto;
	}
	.myForm .input-group label{
		display: inline-block;
		width:20%;
		text-align: right;
	}
	button{
		background-color: #009a61;
		border:1px solid #009a61;
		padding:3%;
		color:#fff;
		border-radius: 4px;
		outline:none;
	}
	.table table{
		width:400px;
		border-collapse: collapse;
	}
	table,tr{
		border:1px solid #bcbcbc;
		text-align: center;
	}
	table tbody tr{
		height:40px;
	}
	table thead tr th{
		background-color:#42b983;
		color:#fff;
	}
	table tbody tr:nth-child(odd){
		background-color:#eeeeee;
	}
</style>