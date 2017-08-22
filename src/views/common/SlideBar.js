import React,{Component} from 'react'
import menu from '../../services/sliderBarInfo.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SlideBar extends Component{
	render(){
		let slideBarStyle={
			transform:this.props.show ? 'none' : 'translateX(-100%)'
		}
		
		let coverStyle={
			opacity : this.props.show? '0.5' : '0',
			display : this.props.show? 'block' : 'none'
		}
		
		let data = this.props.pathname === '/shop' ? menu.shopSlideBarData: menu.homeSlideBarData;
		
		return(
		
			<div>
			
				<ReactCSSTransitionGroup
				  transitionName="example"
      			  transitionAppear={true}
      			  transitionAppearTimeout={500}
      			  transitionEnter={false}
      			  transitionLeave={false}>
				<div class="cover" style={coverStyle} onClick={this.hide.bind(this)}></div>
				</ReactCSSTransitionGroup>
				
				
				<nav class="slidebar" style={slideBarStyle}>
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
		this.props.history.push(item.path);
		this.props.hideHandle(item.header);
	}
	
	hide(){
		this.props.hideHandle();
	}
	
}
