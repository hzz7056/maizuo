import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'

import '../css/movies.css'

import MovieServices from '../services/MovieServices.js'
import NowPlay from '../views/Movies/nowPlay.js'
import SoonPlay from '../views/Movies/soonPlay.js'
let movieScroll;

export default class Movies extends Component{
	constructor({history}){
		super();
		this.state={
			navData:['正在热映','即将上映'],
			seletNav:0,
			listData:[],
			history,
			show:0
		}
		
	}
	
	render(){
		return(
		<div id="movies" class="page">
			<div class="warp">
			<div class="movies-con">
			<div class="movies-select">
				<nav class="list">
					{
						this.state.navData.map((item,index)=>{
							return <li to="" class={index==this.state.seletNav?'active':''} onClick={this.selectAction.bind(this,index)} key={index}>{item}</li>
						})
					}
				</nav>
				</div>
				 {this.state.show==0?<NowPlay />:''}
			 	 {this.state.show==1?<SoonPlay />:''}
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
		
		this.setState({
			show:index
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
			if (disY >= movieScroll.maxScrollY) {
				console.log('触发了')
			}
			
		})
	}
}
