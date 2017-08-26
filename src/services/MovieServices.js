import API from '../api/index.js';

import axios from 'axios';

//请求电影列表
function getMovieslistData (num) {
	return new Promise((resolve,reject)=>{
		axios.get(`${API.MovieslistApi}?page=${num}&count=7`)
		.then((response)=>{
			resolve(response.data.data.films);
		})
		
		.catch((error)=>{
			console.log(error);
		})
		
	})
}


function getMoviesSoonData (num) {
	return new Promise((resolve,reject)=>{
		axios.get(`${API.MoviesSoonlistApi}?page=${num}&count=7`)
		.then((response)=>{
			resolve(response.data.data.films);
		})
		
		.catch((error)=>{
			console.log(error);
		})
		
	})
}

export default{
	getMovieslistData,
	getMoviesSoonData
}
