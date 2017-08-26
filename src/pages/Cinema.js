import React,{Component} from 'react'

import '../css/cinema.css'

import CinemaServices from '../services/CinemaServices.js'
let contentScroll;
export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cityData:[],
			show:0
		}
	}
	
	render(){
		
		
		return(
		<div id="cinema" class="page">
			<div class="warp">
			<div class="cinema-content">
				{
				  this.state.cityData.map((item,index)=>{
				  
				  	return <div class="city-item" key={index}> 
				  				<div class="city-title" onClick={this.Action.bind(this,index)}>{item.name}</div>
				  				
				  				<div class={this.state.show==index ? 'hide-box active ' : 'hide-box'}>
				  				{
				  				  item.list.map((data,index)=>{
				  				  	return <div class="content" key={index}>
				  				  			 <div class="left">
				  								<div class="title"><span class="name">{data.name}</span>  <span class="zuo">座</span> <span class="tong">通</span></div>
				  								<div class="activity">
				  									<span class="food">{data.food}</span>
				  									<span class="actives">{data.labels}</span>
				  								  </div>
				  								<div class="address">{data.address}</div>
				  								<div class="dance">距离未知</div>
				  							 </div>
				  							 
				  							 	<div class="right">
				  							 		<i class="iconfont icon-arrow2-right"></i>
				  							 	</div>
				  							</div>
				  				  })
				  					
				  				}
				  			 </div>		
				  			</div>
				  })
				}
			</div>
			</div>
		</div>
		)
	}
	
	componentWillMount(){
		CinemaServices.getCinemalistData()
		.then((res)=>{
			console.log('res',res);
			this.setState({
				cityData:res
			})
			
		})
		
		
	}
	
	
	componentDidMount() {
		
		 contentScroll = new IScroll('#cinema',{
				protoType:3
			})
		
		contentScroll.on('scrollStart',()=>{
			contentScroll.refresh();
		})
		
	}
	
	
	Action(index){
		console.log(index)
		this.setState({
			show:index
		})
		
	}
	
}
