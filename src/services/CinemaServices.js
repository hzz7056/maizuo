import API from '../api/index.js';

import axios from 'axios';

function getCinemalistData () {
	return new Promise((resolve,reject)=>{
		axios.get(API.CinemalistApi)
		.then((response)=>{
			console.log(response.data)
			resolve(response.data)
		})
		.catch((error)=>{
			console.log(error);
		})
		
	})
	
}

export default{
	getCinemalistData
}