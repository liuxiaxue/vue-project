<template>
  <div id="">
     <ul>
      <li v-for="(nav,index) in navList" v-on:click="switchNav(nav,index)" v-bind:class="[{active:nav.isActive},liSty1]">
        {{nav.navItem}}
      </li>
    </ul>
    <div v-bind:class="[divSty]" v-text="navDiv"></div>
  </div>
</template>

<script>
export default{
  name:'tabSwitch',
  data(){
    return{
      navList:[
        {
          navItem:'Html',
          isActive:true
        },
        {
          navItem:'Css',
          isActive:false
        },
        {
          navItem:'JavaScript',
          isActive:false
        },
        {
          navItem:'vue.js',
          isActive:false
        }
      ],
      navDiv:'Html',
      liSty1:'liSty1',
      divSty:'divSty'
    }
  },
  methods:{
    switchNav:function(item,index){
       this.navDiv = item.navItem;
       for(var i = 0;i<this.navList.length;i++){
          this.navList[i].isActive = false;
       }
       this.navList[index].isActive = true;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.active{
  background-color:#f00;
  color:#fff;
}
.divSty{
  height:200px;
  width:398px;
  border:1px solid #ccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  overflow: hidden;
  padding:0;
  margin:0;
}
.liSty1{
  list-style: none;
  float: left;
  width:100px;
  height:40px;
  line-height: 40px;
  text-align: center;
}
</style>
