import React,{Component} from 'react'

import menu from '../../services/sliderBarInfo.js'

export default class SlideBar extends Component{
	render(){
		
		let data = this.props.pathname === '/shop' ? menu.menu.shopSlideBarData: menu.homeSlideBarData;
		
		return(
		
			<div>
				
				<nav class="slidebar">
					{
						data.map((item,index)=>{
							return <li key={index} onClick={this.goPage.bind(this,item)}><a>{item.title}<i class="iconfont icon-arrow-right"></i></a></li>
						})
					}
				</nav>
				
			
			</div>
			
		)
		
	}
	
	goPage(item){
		console.log(this.props.history)
		//this.props.history.push(item.path);
		
	}
	
	
}
