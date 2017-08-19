import React,{Component} from 'react'

export default class City extends Component{
	constructor(){
		super();
	}
	
	render(){
		return(
		<div id="city" class="page">
			<p>GPS定位你所在的城市</p>
			<div>深圳</div>
			
			<p>热门城市</p>
			<nav>
				<li>北京</li>
				<li>上海</li>
				<li>广州</li>
				<li>深圳</li>
			</nav>
			
			<p>按字母排序</p>
		</div>
		)
	}
	
}
