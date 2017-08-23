import API from '../api/index.js';

import axios from 'axios';

function getCinemalistData () {
	return new Promise((resolve,reject)=>{
		axios.get(`${API.CinemalistApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log('全部数据',response.data.data.cinemas)
			var obj={};
			response.data.data.cinemas.map((item)=>{
				var name=item.district.name;
				if(obj[name]==null){
					obj[name]=[];
				}
				var newItem={};
				newItem.id=item.id;
				newItem.name=item.name;
				newItem.address=item.address;
				newItem.labels=item.labels.name;
				
				//判断优惠活动是否为空
				if((item.labels).length==1){
					newItem.labels=item.labels[0].name;
					newItem.food='';
				}else if((item.labels).length>=2){
					newItem.labels=item.labels[1].name;
					newItem.food='可乐爆米花';
				}else{
					newItem.labels='';
					newItem.food='';
				}
				obj[name].push(newItem)
			})
			
			//数据处理
			var Arr=[];
			for(let key in obj){
				var obj1={};
				obj1.name=key;
				obj1.list=obj[key];
				Arr.push(obj1);
			}
			
			resolve(Arr)
		})
		.catch((error)=>{
			console.log(error);
		})
		
	})
	
}


function getCinemaData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.cinemaDataApi}?__t=${new Date().getTime()}`)
		.then((response)=>{			
			console.log("电影院数据",response.data.data.cinemas)
			var obj = {}
			response.data.data.cinemas.map((Item)=>{
				 var name = Item.district.name;
			     if(obj[name]==null){
			        obj[name] = []; 
			     }
			     //取值
			    var newItem = {};
			    newItem.id =Item.id;
			    newItem.name =Item.name;
			    newItem.address =Item.address;
			    //判断优惠活动是否为空
			    if((Item.labels).length==1){
			    	newItem.labels=Item.labels[0].name;//优惠活动
			    	newItem.food ="";
			    }
			    else if((Item.labels).length>=2){
			    	newItem.labels=Item.labels[1].name;
			    	newItem.food="可乐爆米花";
			    }
			    else{
			    	newItem.labels ="";
			    	newItem.food ="";
			    }
			    obj[name].push(newItem);

			})
			//数据处理
			var Arr=[]
			for(let key in obj){
				var obj1={};
				obj1.name=key;
				obj1.list=obj[key];
				Arr.push(obj1);
			}
			resolve(Arr);
	   })
	})
}

export default{
	getCinemalistData
}