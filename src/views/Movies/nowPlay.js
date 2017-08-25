import React,{Component} from 'react'

import '../../css/movies.css'

import MovieServices from '../../services/MovieServices.js'

export default class nowPlay extends Component{
	constructor(){
		super();
		
		this.state={
			listData:[]
		}
	}
	
	render(){
		return (
			<div id="nowplay"> 
				<div class="movies-main">
				{
					this.state.listData.map((item,index)=>{
						return <div class="item-main" key={index}>
									<div class="image">
										<img src={item.poster.thumbnail}/>
									</div>
										
										<div class="content">
											<div class="title"><span class="title-name">{item.name}</span>  <span class="grade">{item.grade} <i class="iconfont icon-arrow2-right"></i></span></div>
											<div class="dec"><span>{item.intro}</span></div>
											<div class="count">
												<span class="cinema">{item.cinemaCount}家影院上映</span>
												<span>{item.watchCount}人购票</span>
											</div>
										</div>
									</div>
					})
					
				}
				</div>
			</div>
			
		)
		
	}
	
	
	componentWillMount(){
		MovieServices.getMovieslistData(num)
		.then((res)=>{
			console.log(res);
			this.setState({
				listData:res
			})
		})
		
	}
	
}
