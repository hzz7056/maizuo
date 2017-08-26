import React,{Component} from 'react'

import HomeServices from '../../services/HomeServices.js'

export default class HomelistDetails extends Component{
	 constructor({location}){
	 	super();
	 	
	 	this.state={
	 		listData:[],
	 		location
	 		
	 	}
	 }

	render(){
		
		console.log(this.state.listData)

		
		
		return(
			<div id="listdetail" class="page">
			{
				this.state.listData.map((item,index)=>{
					return <div class="detail-item" key={index}>
			  					<img src={item.cover.origin} />
								
								<div class="item-con">
								<div class="brief"><span class="brief-t">影片简介</span></div>
								<div class="info">
								<div><span>导　　演  : </span> <span>{item.director}</span></div>
							<div>
						
						主　　演  : {
							item.actors.map((actors,index)=>{
								return  <span key={index}>{actors.name} | </span>
										
							})
							
						
						}
						
						</div>
						
						
						<div>地区语言  : {item.nation} ({item.language})</div>
						<div>类　　型  : {item.category}</div>
						<div>上映时期  : 8月17日上映</div>
						<div>{item.synopsis}</div>
					</div>
					</div>
					</div>
			})
			
			}
			
			
			<div class="pay">
				<button type="button" class="pay-btn">立即购票</button>
			</div>
			</div>
		)
		
	}
	
	
	componentWillMount(){
		//请求列表详情页数据
		HomeServices.getHomelistDetailsData(this.state.location.state.id)
			.then((res)=>{
				console.log(res)
				if (res) {
					this.state.listData.push(res);
					this.setState({
					listData:this.state.listData
					})
				}
				
			})
		
	}

}