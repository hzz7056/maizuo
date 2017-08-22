import React,{Component} from 'react'

import '../css/cinema.css'

import CinemaServices from '../services/CinemaServices.js'

export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cityData:['福田区','龙岗区','宝安区','坪山新区','南山区','光明新区','龙华新区','罗湖区','盐田区']
		}
	}
	
	render(){
		return(
		<div id="cinema" class="page">
			<div class="cinema-content">
				{
				  this.state.cityData.map((item,index)=>{
				  	return <div class="city-item" key={index} onClick={this.Action.bind(this,index)}> 
				  				<div class="city-title">{item}</div>
				  				
				  				<div class="hide">
				  					<div class="title">深圳中影ul城市影院万荟城店</div>
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
			console.log(res);
		})
		
		
	}
	
	
	Action(index){
		console.log(index)
	}
	
}
