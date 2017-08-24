import React,{Component} from 'react'

import '../css/city.css'

import CityServices from '../services/CityServices.js'

export default class City extends Component{
	constructor(){
		super();
		this.state={
			cityChar:[]
		}
	}
	
	render(){
		return(
		<div id="city" class="page">
			<p class="gps">GPS定位你所在的城市</p>
			<div class="gps-city"><span>深圳</span></div>
			
			<p>热门城市</p>
			<nav class="hot-list">
				<li>北京</li>
				<li>上海</li>
				<li>广州</li>
				<li>深圳</li>
			</nav>
			
			<p>按字母排序</p>
			<nav class="char-list">
				{
					this.state.cityChar.map((item,index)=>{
						return <li key={index}>{item.word}</li>
					})
				}
			</nav>
			
			
			{
				this.state.cityChar.map((item,index)=>{
					return 	<div class="city-main" key={index}>
								<p>{item.word}</p>
								<nav class="main-list">
									{
									  item.list.map((data,index)=>{
									  	return <li key={index}>{data.name}</li>
									  	
									  })
									}
							
									
								</nav>
							</div>
				})
			}
			
		</div>
		)
	}
	
	
	componentWillMount() {
		//获取A-Z的大写字母	
			CityServices.getcitylistData()
			.then((res)=>{
				console.log(res);
				this.setState({
					cityChar:res
				})
			})
			
	}
	
}
