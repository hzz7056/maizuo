import API from '../api/index.js';

import axios from 'axios';

//请求轮播图
function getHomeBannerData() {
	return new Promise((resolve,reject)=>{
		axios.get(`${API.HomeBannerApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log(response.data.data.billboards)
			if(response.data.data.billboards){
			var newArr=response.data.data.billboards.map((item)=>{
				var newItem={};
				newItem.id=item.id;
				newItem.imgPath=item.imageUrl;
				return newItem
			})
			
			resolve(newArr);
			}
		})
		
		.catch((error)=>{
			console.log(error);
		})
		
	})
}


//请求上映电影
function getHomelistData () {
	return new Promise((resolve,reject)=>{
		axios.get(`${API.HomeListApi}?__t=${new Date().getTime()}&page=1&count=5`)
		.then((response)=>{
			console.log(response);
			if(response.data.data.films){
				var newArr=response.data.data.films.map((item)=>{
				var newItem={};
				newItem.id=item.id;
				newItem.name=item.name;
				newItem.imgPath=item.cover.origin;
				newItem.cinemaCount=item.cinemaCount;
				newItem.watchCount=item.watchCount;
				newItem.grade=item.grade;
				return newItem
			})
			
			resolve(newArr);
		}
			
			
		})
		.catch((error)=>{
			console.log(error)
		})
		
	})
}

//请求即将上映电影
function getHomelistSoonData () {
	return new Promise((resolve,reject)=>{
		axios.get(`${API.HomelistSoonApi}?__t=${new Date().getTime()}&page=1&count=3`)
		.then((response)=>{
			
			resolve(response.data.data.films);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
	
}


//请求详情页数据
function getHomelistDetailsData(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.HomelistDetailsApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log(response.data.data.film);
			resolve(response.data.data.film);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
	
}


export default{
	getHomeBannerData,
	getHomelistData,
	getHomelistSoonData,
	getHomelistDetailsData
}
