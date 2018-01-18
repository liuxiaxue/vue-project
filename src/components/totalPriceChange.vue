<template>
	<div id="app2">
      <h1>{{msg1}}</h1>
      <table>
          <thead>
            <tr>
              <th>商品名称</th>
              <th>价格</th>
              <th>操作</th>
            </tr>
            <tr v-for="(shop,index) in shopList">
                <td>{{shop.name}}</td>
                <td>{{shop.price}}</td>
                <td>
                  <button @click="buy(shop.price,index)">购买</button>
                  <button @click="notBuy(shop.price,index)" v-show="shop.isBuy">不想买了</button>
                </td>
            </tr>
            <tr class="borSty">
              <td colspan="2">总计：</td>
              <td v-text="total"></td>
            </tr>
          </thead>
      </table>
    </div>
</template>

<script type="text/javascript">
	export default{
		name:'totalPriceChange',
		data(){
			return{
				shopList:[
			        {name:'手机',price:5000,isBuy:false},
			        {name:'电脑',price:7000,isBuy:false},
			        {name:'书',price:200,isBuy:false}
			      ],
			      total:0
			}
		},
		methods:{
			buy:function(number,index){
		      this.total += number;
		      this.shopList[index].isBuy = true;
		    },
		    notBuy:function(number,index){
		      this.total -= number;
		      this.shopList[index].isBuy = false;
		    }
		}
	}
</script>

<style>
table{
  border-collapse: collapse;
}
table tr th,table tr td{
  width:120px;
  height:40px;
  line-height: 40px;
  text-align: center;
}
.borSty{
  border-top:1px solid #ddd;
}
.borSty td:first-child{
  text-align: right;
}
</style>