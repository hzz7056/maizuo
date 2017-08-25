import React,{Component} from 'react'

import MovieServices from '../../services/MeServices.js'

import '../../css/me.css'

export default class Center extends Component{
	constructor(){
		super();
		this.state={
			infoData:{}
		}
	}
	
	render(){
		return (
			<div id="center" class="subpage">
				
				
			
				<div class="main">
					<div class="content">
						<div class="image">
							<img src={this.state.infoData.avatorUrl} />
						</div>
						
						<div class="con">
							<div class="name">{this.state.infoData.name}</div>
							<div class="uid">ID:{this.state.infoData.id}</div>
							<div class="esc"><a href="#">退出</a></div>
						</div>
					</div>
					
				</div>
				
				
				<div class="center-list">
					<nav class="account-list">
						<li>
							<a>影票订单</a>   	 <span class="count">0张</span>
						</li>
						
						<li>
							<a>影票代付订单</a>   <span class="count">0张</span>
						</li>
						
						<li>
							<a>商城订单</a>  
						</li>
					</nav>
					
					
					
					<nav class="account-money">
						
						<li>
							
								<a>我的现金券</a>  <span class="count">0张</span>
							
						</li>
						
						<li>
							<a>账户余额</a>   <span class="count">0张</span>
						</li>
						
						<li>
							<a>我的卖座卡</a>  <span class="count">0张</span>
						</li>
						
					</nav>
					
				</div>
				
				<div class="set">
					<a>设置</a>
				</div>
			
			</div>
			
		)
	}
	
	componentWillMount(){
		
		
	}
	
	
}
