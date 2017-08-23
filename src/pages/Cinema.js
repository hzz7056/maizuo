import React,{Component} from 'react'

import '../css/cinema.css'

import CinemaServices from '../services/CinemaServices.js'

export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cityData:[],
			show:false
		}
	}
	
	render(){
		return(
		<div id="cinema" class="page">
			<div class="cinema-content">
				{
				  this.state.cityData.map((item,index)=>{
				  	
				  	var class1 = index !== 0 ? 'active' : '';
				  	
				  	console.log(class1)
				  	
				  	return <div class="city-item" key={index}> 
				  				<div class="city-title" onClick={this.Action.bind(this,index)}>{item.name}</div>
				  				
				  				<div className="hide-box" class={class1}>
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
	
	
	Action(index){
		console.log(index)
		this.setState({
			show:!this.state.show
		})
	}
	
}
