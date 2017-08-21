import React,{Component} from 'react'

import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';

import '../css/shop.css'

import ShopServices from '../services/ShopServices.js';

let bannerSwiper=null;

export default class Shop extends Component{
	constructor(){
		super();
		
		this.state={
			listData:[],
			activesData:[],
			activesTitleData:[]
		}
	}
	
	render(){
		return(
		<div id="shop" class="page">
			<div ref="banner" class="swiper-container shop-banner">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide">
				        		<img src={banner1}/>
				        </div>
				        
				          <div class="swiper-slide">
				        		<img src={banner2}/>
				        </div>
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
					
					<div class="active-title">
						{
							this.state.activesTitleData.map((item,index)=>{
								return <div class="item" key={index}>
											<img src={item.imageSrc} />
											
											<div class="item-m">
											{
												item.products.map((data,index)=>{
													return 	<div class="item-con" key={index}>
																<div class="image">
																<img src={data.image} />
																</div>
																
																<div class="proname">{data.name}</div>
																<div class="price">¥{data.price}</div>
																
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
		
		</div>
		)
	}
	
	
	componentWillMount(){
		ShopServices.getShoplistData()
		.then((res)=>{
			this.setState({
				listData:res
			})
		})
		
		
		ShopServices.getShopActiveData()
		.then((res)=>{
			this.setState({
				activesData:res
			})
		})
		
		ShopServices.getShopActiveTitleData()
		.then((res)=>{
			console.log(res);
			this.setState({
				activesTitleData:res
			})
		})
		
		
	}
	
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner, {
			loop:true,
			autoplay : 3000,
			pagination: '.swiper-pagination'
		});
	}
	
	
}