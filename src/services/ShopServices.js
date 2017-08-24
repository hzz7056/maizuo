import API from '../api/index.js';

import axios from 'axios';

//请求商城列表
function getShoplistData() {
	return new Promise((resolve,reject)=>{
		axios.get(API.ShoplistApi)
		.then((response)=>{
			var newArr=[];
			if(response.data.data.length >= 8){
				newArr=response.data.data.splice(0,8)
			}
			resolve(newArr);
		})
		
		.catch((error)=>{
			console.log(error);
		})
	})
	
	
}

//请求商城活动数据
function getShopActiveData() {
	return new Promise((resolve,reject)=>{
		axios.get(API.ShoplistApi)
		.then((response)=>{
			var newArr=[];
			if(response.data.data.length >=2){
				newArr=response.data.data.splice(10,2);
			}
			resolve(newArr);
		})
		
		.catch((error)=>{
			console.log(error);
		})
	})
	
	
}


//请求商城图片数据
function getShopActiveTitleData() {
	return new Promise((resolve,reject)=>{
		axios.get(API.ShoplistApi)
		.then((response)=>{
			console.log(response.data.data);
			var newArr=[];
			if(response.data.data.length >=7){
				newArr=response.data.data.splice(12,7);
			}
			resolve(newArr);
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
			console.log(response.data.data.list);
			resolve(response.data.data.list);
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


function getProimgData () {
	return new Promise((resolve,reject)=>{
		axios.get(API.ProDetailsimgApi)
		.then((response)=>{
			console.log(response.data.data);
			resolve(response.data.data);
		})
		
		.catch((error)=>{
			console.log(error);
		})
	})
}


export default{
	getShoplistData,
	getShopActiveData,
	getShopActiveTitleData,
	getShopProductData,
	getProdetailsData,
	getProimgData
}