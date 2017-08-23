import API from '../api/index.js';

import axios from 'axios';


function getCenterInfoData(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.CenterInfoApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log(response.data.data.user)
			resolve(response.data.data.user);
		})
		
		.catch((error)=>{
			console.log(error)
		})
		
	})
	
}


export default{
	getCenterInfoData
}