import API from '../api/index.js';

import axios from 'axios';

function getcitylistData () {
	return new Promise((resolve,reject)=>{
		axios.get(`${API.CitylistDataApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log('全部数据',response.data.data.cities);
			var obj={};
			response.data.data.cities.map((item)=>{
				//截取拼音字母
				var word=(item.pinyin).substring(0,1);
				
				if(obj[word]==null){
					obj[word]=[];
					
				}
				
				var newItem={};
				newItem.id=item.id;
				newItem.name=item.name;
				obj[word].push(newItem);
				
			})
				//数据处理
				var Arr=[];
				for(let key in obj){
					var obj1={};
					obj1.word=key;
					obj1.list=obj[key];
					Arr.push(obj1)
				}
				
				
				//对数组进行排序
				if(Arr.length>=22){
					for(var j=0;j<Arr.length-1;j++){
					for(var i=0;i<Arr.length-1;i++){
						if(Arr[i].word > Arr[i+1].word){
							var temp;
							temp=Arr[i];
							Arr[i]=Arr[i+1];
							Arr[i+1]=temp;
						}
					}
				}
					console.log('11111',Arr)
					resolve(Arr);
				}
		})
		
		.catch((error)=>{
			console.log(error);
		})
	})
}


//请求城市数据
function getCityData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.cityApi}?__t=${new Date().getTime()}`)
		.then((response)=>{			
			console.log("城市数据",response.data.data.cities)
			var obj = {}
			response.data.data.cities.map((Item)=>{
				//截取拼音首字母
				 var word = (Item.pinyin).substring(0,1);
			     if(obj[word]==null){
			        obj[word] = []; 
			     }
			     //取值
			    var newItem = {};
			    newItem.id =Item.id;
			    newItem.name =Item.name;
			    obj[word].push(newItem);

			})
			//数据处理
			var Arr=[]
			for(let key in obj){
				var obj1={};
				obj1.word=key;
				obj1.list=obj[key];
				Arr.push(obj1);
			}
			//对字母进行冒泡排序
		if(Arr.length>=22){			
			for(var j=0;j<Arr.length-1;j++){
				for(var i=0;i<Arr.length-1;i++){
					if(Arr[i].word>Arr[i+1].word){
						var tem;
						tem=Arr[i];
						Arr[i]=Arr[i+1];
						Arr[i+1]=tem;
					}
			    }
			}
			console.log("sadasd",Arr)
			resolve(Arr);			
			}

	   })
	})
}


export default{
	 getcitylistData,
	 
}
