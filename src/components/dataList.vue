<template>
	<div class="table">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>Sex</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="data in dataList">
					<td>{{data.name}}</td>
					<td>{{data.age}}</td>
					<td>{{data.sex}}</td>
				</tr>
			</tbody>
		</table>
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
				]
			}
		}
	}
</script>

<style>
.table table{
	width:400px;
	border-collapse: collapse;
}
table,tr{
	border:1px solid #bcbcbc;
}
table thead tr th{
	background-color:#42b983;
	color:#fff;
}
table tbody tr:nth-child(odd){
	background-color:#eeeeee;
}
</style>