<template>
	<div id="app">
		<h1>vue.js笔记</h1>
		<p class="wrapper">
		    <ol>
          <li><router-link to="/helloWorld">{{msg1}}</router-link></li>
          <li><router-link to="/condition">{{msg2}}</router-link></li>
          <li><router-link to="/dataList">{{msg3}}</router-link></li>
		      <li><router-link to="/tabSwitch">{{msg4}}</router-link></li>
		      <li><router-link to="/totalPriceChange">{{msg5}}</router-link></li>
          <li><router-link to="/integrate">{{msg6}}</router-link></li>
          <li><router-link to="/counter">{{msg7}}</router-link></li>
		    </ol>
		</p>
  </div>
</template>

<script> 
export default {
  name: 'app',
  data(){
    return{
      msg1:'hello Wolrd!(数据双向绑定)',
      msg2:'条件判断',
      msg3:'数据列表(v-for)',
      msg4:'tab切换案例',
      msg5:'总价合计案例',
      msg6:'总结案列',
      msg7:'计数器案例'
    }
  }
}
</script>

<style type="text/css">
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper li{
  text-align: left;
  height:40px;
  line-height:40px;
}
</style>