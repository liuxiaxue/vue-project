import Vue from 'vue'
import Home from '@/components/home.vue'
import helloWorld from '@/components/helloWorld.vue'
import condition from '@/components/condition.vue'
import dataList from '@/components/dataList.vue'
import tabSwitch from '@/components/tabSwitch.vue'
import totalPriceChange from '@/components/totalPriceChange.vue'
import integrate from '@/components/integrate.vue'
import counter from '@/components/counter.vue'

const routers = [
	{
    	path:'/',
    	component:Home
    },
    {
    	path:'/helloWorld',
    	name:'helloWorld',
    	component:helloWorld
    },
    {
    	path:'/condition',
    	name:'condition',
    	component:condition
    }
    ,
    {
    	path:'/dataList',
    	name:'dataList',
    	component:dataList
    },
	{
	    path: '/tabSwitch',
	    name: 'tabSwitch',
	    component: tabSwitch,
	}, 
	{
	    path:'/totalPriceChange',
		name:'totalPriceChange',
		component:totalPriceChange  
    },
    {	
    	path:'/integrate',
    	name:'integrate',
    	component:integrate
    },
    {
    	path:'/counter',
    	name:'counter',
    	component:counter
    }
]
export default routers;

