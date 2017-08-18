import React,{Component} from 'react'

import HomeServices from '../services/HomeServices.js'

import '../css/home.css'

let bannerSwiper=null;

export default class Home extends Component{
	constructor({history}){
		super();
		
		console.log(history)
		
		this.state={
			bannerData:[],
			listData:[],
			listsoonData:[],
			history
		}
	}
	
	

	render(){
		return(
		<div id="home" class="page">
				<div ref="banner" class="swiper-container home-banner">
				    <div class="swiper-wrapper">
				        {
				        	this.state.bannerData.map((item,index)=>{
				        		return <div class="swiper-slide" key={index}>
				        					<img src={item.imgPath} />
				        				</div>
				        	})
				        }
				      
				        
				    </div>
				</div>
				
				
				<div class="home-main">
					{
						this.state.listData.map((item,index)=>{
							return <div class="item" key={index} onClick={this.goDeatail.bind(this)}>
										<img src={item.imgPath}/>
										
										<div class="item-con">
											<div class="left">
											<p class="title">{item.name}</p>
										<div class="pop">
											<span>{item.cinemaCount}家影院上映</span>	
											<span class="count">{item.watchCount}人购票</span>
										  </div>
										  </div>
										  
										  <div class="grade">{item.grade}</div>
										</div>
									</div>
						})
					}
					
					
					<div class="more">
						<button type="button" class="morebtn">更多即将上映电影</button>
					</div>
				
					<div class="line-box">
						<div class="soon">即将上映</div>
					</div>
					
					
					
					{
						this.state.listsoonData.map((item,index)=>{
							return <div class="item" key={index}>
										<img src={item.cover.origin}/>
										<div class="soon-con">
											<div class="title">{item.name}</div>
											<div class="date">8月25日上映</div>
										</div>
									</div>
						})
						
					}
					
					
					<div class="more">
						<button type="button" class="morebtn">更多即将上映电影</button>
					</div>
				</div>
				
				
				
		</div>
		)
	}
	
	componentWillMount(){
		//请求轮播图
		HomeServices.getHomeBannerData()
		.then((res)=>{
			console.log(res);
			
			if (res) {
			this.setState({
				bannerData:res
				})
			}
			
		})
		
		//请求上映电影
		HomeServices.getHomelistData()
		.then((res)=>{
			if (res) {
			this.setState({
				listData:res
			 })
			}
		})
		
		//请求即将上映电影
		HomeServices.getHomelistSoonData()
		.then((res)=>{
			console.log(res)
			if (res){
				this.setState({
				listsoonData:res
			  })
			}
			
		})
		
		
		
		
	}
	
	componentDidMount(){
		console.log(this.state.bannerData.length)
//		bannerSwiper=new Swiper(this.refs.banner,{
//			
//		})
	}
	
	goDeatail(){
		this.state.history.push('/list-details')
	}
	
	
}
