import React,{Component} from 'react'

import HomeServices from '../services/HomeServices.js'

export default class HomelistDetails extends Component{
	 constructor(){
	 	super();
	 	
	 	this.state={
	 		listData:[]
	 	}
	 }

	render(){
		console.log(this.state.listData)
		let list=this.state.listData.map((item,index)=>{
					return( <div class="detail-item">
			  					<img src={item.cover.origin} />
								
								<h3>影片简介</h3>
								<div><span>导演:</span> <span>{item.director}</span></div>
							</div>)
			});
		
		return(
			<div id="listdetail" class="page">
			
				{list}   
			</div>
			
		)
	}
	
	
	componentWillMount(){
		//请求列表详情页数据
		HomeServices.getHomelistDetailsData()
			.then((res)=>{
				console.log(res)
				if (res) {
					this.state.listData.push(res);
					this.setState({
					listData:this.state.listData
					},()=>{
						console.log(this.state.listData)
					})
				}
				
			})
		
	}

}