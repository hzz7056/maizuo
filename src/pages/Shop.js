import React,{Component} from 'react'
import {Link, Route} from 'react-router-dom'

import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';

import '../css/shop.css'

import ShopServices from '../services/ShopServices.js';

let bannerSwiper=null;

let contentScroll;

export default class Shop extends Component{
	constructor(routeProps){
		super();
		
		let {match,history,location} = routeProps;
		
		this.state={
			listData:[],
			activesData:[],
			actives2Data:[],
			bannerData:[],
			activesTitleData:[],
			prolistData:[],
			history,
			location
		}
	}
	
	render(){
		return(
		<div id="shop" class="page">
			<div class="warp">
			<div ref="banner" class="swiper-container shop-banner">
				    <div class="swiper-wrapper">
				    {
				    	this.state.bannerData.map((item,index)=>{
				    		return <div class="swiper-slide" key={index}>
				        				<img src={item.imageSrc} />
				        				</div>
				    	})
				    }
				        
				    </div>
				    
				    <div class="swiper-pagination"></div>
				</div>
				
				
				<div class="shop-list">
					<nav class="list-nav">
						{
							this.state.listData.map((item,index)=>{
								return <li key={index}>
										<div class="image">
											<img src={item.imageSrc} />
										</div>
											<span class="text">{item.name}</span>
									  </li>
							})
						}
					</nav>
				
				</div>
				
				<div class="line"></div>
				
				<div class="active-content">
					<div class="activity1">
						{
							this.state.activesData.map((item,index)=>{
								return <div class="item" key={index}>
											<img src={item.imageSrc} />
									   </div>
							})
						}
					</div>
					
					<div class="activity2">
						<div class="act-title">-&nbsp;有品专区&nbsp;-</div>
						{
						  this.state.actives2Data.map((item,index)=>{
						  	return <div class="item" key={index}>
											<div class="left">
												<img src={item.imageSrc} />
											</div>
																		
									</div>
						  })
							 
						}
					</div>
					
					<div class="active-title">
						{
							this.state.activesTitleData.map((item,index)=>{
							return <div class="item" key={index}>
											<img src={item.imageSrc} />
											
											<div class="item-m">
											{
												item.products.map((data,index)=>{
													return 	<div class="item-con" key={index} onClick={this.proAction1.bind(this,data.id)}>
																<div class="image">
																<img src={data.image} />
															</div>
																
																<div class="proname">{data.name}</div>
																<div class="price">¥{parseInt(data.price/100)}</div>
																
															</div>
												})
										
											}
												<div class="item-con">
													<div class="more">全部</div>
												</div>
											</div>
										</div>
							})
							
							
						}
					</div>
				
				</div>
				
				
				<div class="product-main">
				<div class="pro-title">-&nbsp;好货精选&nbsp;-</div>
					<div class="product-con">
							{
							  this.state.prolistData.map((item,index)=>{
							  	return <div class="item even" key={index}>
							  			{
							  				item.skuList.map((data,index)=>{
							  					return  <div class="item-main"  key={index}>
							  						<div class="image">
							  							<img src={data.image}/>
							  							</div>
							  							
							  							<div class="proname">{item.masterName}</div>
							  								<div class="pro-price">
							  								<span class="price">¥{parseInt(data.price/100)}</span>
							  								<span class="sellcount">已售{item.displaySalesCount}</span>
							  							</div>
							  						</div>
							  				})
							  			
							  			}
							  			
							  			
							  		</div>
							  })
							
							}
					</div>
				
				</div>
			</div>
		</div>
		)
	}
	
	
	proAction1(id){
		console.log(id)
		
		this.state.history.push({
			pathname:'prodetails',
			state:{
				id
			}
		});
	}
	
	
	componentWillMount(){
		ShopServices.getShoplistData()
		.then((res)=>{
			//拆分res(0,8),得到列表数据
			this.setState({
				listData:res.splice(0,8)
			})
			
			//拆分res(0,2),得到轮播图数据
			this.setState({
				bannerData:res.splice(0,2)
			})
				bannerSwiper.update();
				bannerSwiper.slideTo(1, 0);
			
			//拆分res(2,2),得到前两个活动数据
			this.setState({
				activesData:res.splice(0,2)
			})
			
			//拆分res(0,3),得到后两个活动数据
			this.setState({
				actives2Data:res.splice(0,3)
			})
			

			//剩余的是列表标题数据
			this.setState({
				activesTitleData:res
			})
			contentScroll.refresh();
			
		})
		
		
		ShopServices.getShopProductData()
		.then((res)=>{
			this.setState({
				prolistData:res
			})
			contentScroll.refresh();
		})
		
	}
	
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner, {
			loop:true,
			autoplay : 3000,
			pagination: '.swiper-pagination'
		});
		
		
		
		contentScroll = new IScroll('#shop',{
				protoType:3
			})
		
		contentScroll.on('scrollStart',()=>{
			contentScroll.refresh();
		})
	}
	
	
}