import API from '../api/index.js';

import axios from 'axios';

//请求商城列表
function getShoplistData() {
	return new Promise((resolve,reject)=>{
		axios.get(API.ShoplistApi)
		.then((response)=>{
//			var newArr=[];
//			if(response.data.data.length >= 8){
//				newArr=response.data.data.splice(0,8)
//			}
			
			resolve(response.data.data);
		})
		
		.catch((error)=>{
			console.log(error);
		})
	})
	
	
}


//请求商城商品数据
function getShopProductData () {
	return new Promise((resolve,reject)=>{
		axios.get(API.ShopProductApi)
		.then((response)=>{
			console.log(response.data.list);
			if(response.data.data.list){
				resolve(response.data.data.list);
			}
			
		})
		
		.catch((error)=>{
			console.log(error);
		})
	})
}


//请求商城商品详情页数据
function getProdetailsData () {
	return new Promise((resolve,reject)=>{
		axios.get(API.ProDetailsApi)
		.then((response)=>{
			console.log(response.data.data);
			var item=response.data.data;
			var obj={};
			
			obj.id=item.id;
			obj.masterName=item.masterName;
			obj.slaveName=item.slaveName;
			obj.sell=item.displaySalesCount;
			obj.prodec=item.skuList[0].images;
			obj.price=item.skuList[0].price
			resolve(obj)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	
}




export default{
	getShoplistData,
	getShopProductData,
	getProdetailsData,
	
}