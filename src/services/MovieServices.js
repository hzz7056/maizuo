import API from '../api/index.js';

import axios from 'axios';

//请求电影列表
function getMovieslistData () {
	return new Promise((resolve,reject)=>{
		axios.get(API.MovieslistApi)
		.then((response)=>{
			console.log(response.data.data.films);
			resolve(response.data.data.films);
		})
		
		.catch((error)=>{
			console.log(error);
		})
		
	})
}

export default{
	getMovieslistData
}
