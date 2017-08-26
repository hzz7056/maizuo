import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'

import '../css/movies.css'

import MovieServices from '../services/MovieServices.js'
import NowPlay from '../views/Movies/nowPlay.js'
import SoonPlay from '../views/Movies/soonPlay.js'
let movieScroll;

export default class Movies extends Component{
	constructor({history,location}){
		super();
		this.state={
			navData:['正在热映','即将上映'],
			location,
			listData:[],
			soonData:[],
			history,
			show:0,
			num:1,
			soonnum:1
		}
		
	}
	
	render(){
		
		let ele=this.state.show == 0 ? <NowPlay data={this.state.listData}/> : <SoonPlay data={this.state.soonData} />;
		
		return(
		<div id="movies" class="page">
			<div class="warp">
			<div class="movies-con">
			<div class="movies-select">
				<nav class="list">
					{
						this.state.navData.map((item,index)=>{
							return <li to="" class={index==this.state.show?'active':''} onClick={this.selectAction.bind(this,index)} key={index}>{item}</li>
						})
					}
				</nav>
				</div>
					
				{ele}
			  </div>
			
			
			</div>
		</div>
		)
	}
	
	
	
	componentWillMount(){
			MovieServices.getMovieslistData()
				.then((res)=>{
				this.setState({
					listData:res
				})
			})
		
	
		MovieServices.getMoviesSoonData()
		.then((res)=>{
			this.setState({
				soonData:res
			})
		})
		
		
	}
	
	
	componentDidMount() {
		 movieScroll = new IScroll('#movies',{
				protoType:3,
				scrollbars:true,
				hideScrollbar:false
			})
		
		movieScroll.on('scrollStart',()=>{
			movieScroll.refresh();
		})	
		
		
		
		movieScroll.on('scrollEnd',()=>{
			var disY=movieScroll.y - movieScroll.maxScrollY;
			console.log(disY)
			console.log(movieScroll.maxScrollY)
			if (disY <= -(movieScroll.maxScrollY/2)) {
				
				console.log('触发了')
				
				
				//请求上映电影列表
				MovieServices.getMovieslistData(this.state.num+1)
				.then((res)=>{
				this.setState({
					num:this.state.num+1
				})
				this.state.listData.push(...res)
				this.setState({
					listData:this.state.listData
				})
				movieScroll.refresh();
				})
				
				
				//请求即将上映电影列表
				MovieServices.getMoviesSoonData(this.state.soonnum+1)
				.then((res)=>{
				this.setState({
					soonnum:this.state.soonnum+1
				})
				
				this.state.soonData.push(...res)
				this.setState({
					soonData:this.state.soonData
				  })
				movieScroll.refresh();
			   })
				
			}
		})
		
		if (this.state.location.state) {
			this.setState({
				show:this.state.location.state.navindex
			})
		}
		
	}
	
	
	selectAction(index){
		console.log(index)
		
		this.setState({
			show:index
		})
		
		
	}
}
