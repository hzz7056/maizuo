import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/movies.css'

import MovieServices from '../services/MovieServices.js'
import NowPlay from '../views/Movies/nowPlay.js'
import SoonPlay from '../views/Movies/soonPlay.js'

export default class Movies extends Component{
	constructor({history}){
		super();
		this.state={
			navData:['正在热映','即将上映'],
			seletNav:0,
			listData:[],
			history
		}
		
	}
	
	render(){
		return(
		<div id="movies" class="subpage">
			<div class="movies-con">
			<div class="warp">
			<div class="movies-select">
				<nav class="list">
					{
						this.state.navData.map((item,index)=>{
							return <Link to="/now-play" class={index==this.state.seletNav?'active':''} onClick={this.selectAction.bind(this,index)} key={index}>{item}</Link>
						})
					}
				</nav>
				</div>
				
				
				
				
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
			</div>
		</div>
		)
	}
	
	selectAction(index){
		console.log(index)
		console.log(this.state.history)
		this.setState({
			seletNav:index
		})
		
		if (index==0) {
			console.log(11)
			//this.state.history.push('/now-play');
		}
	}
	
	componentWillMount(){
		MovieServices.getMovieslistData()
		.then((res)=>{
			console.log(res);
			this.setState({
				listData:res
			})
		})
		
	}
	
}
