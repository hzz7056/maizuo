import API from '../api/index.js';

import axios from 'axios';

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


export default{
	getShoplistData,
	getShopActiveData,
	getShopActiveTitleData,
	getShopProductData
}