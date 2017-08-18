import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class AppHeader extends Component{
		
	render(){
		
		return (
			
			<div class="app-header">
				<span class="iconfont icon-menu" onClick={this.menuAction.bind(this)}></span>
				<h3 class="title">{this.props.title}</h3>
				
				<Link class="city iconfont icon-arrow-down" to="/city">深圳</Link>
				<Link class="iconfont icon-person" to="/me"></Link>
				
			</div>
			
		)
	}
	
	menuAction(){
		this.props.menuHandle();
	}
}
