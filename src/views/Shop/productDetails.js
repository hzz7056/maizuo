import React,{Component} from 'react'

import ShopServices from '../../services/ShopServices.js'

let bannerSwiper=null;

export default class productDetails extends Component{
	constructor(){
		super();
		this.state={
			bannerData:[],
			content:[],
			proimg:[]
		}
		
	}
	
	render(){
		let img=this.state.proimg.desc
		return (
			<div id="prodetails" class="subpage">
				<div class="detail-content">
				  <div class="detail-top">
					<div ref="banner" class="swiper-container detail-banner">
				    <div class="swiper-wrapper">
				    {
				      this.state.bannerData.map((item,index)=>{
				      	return <div class="swiper-slide" key={index}>
				      			 	<img src={item}/>
				        		</div>
				      })
				    	
				   	}	  
				    </div>
				    <div class="swiper-pagination"></div>
				   </div> 
				   
				   
				   {
				   	this.state.content.map((item,index)=>{
				   		return <div class="pro-con" key={index}>
				   				<div class="name">{item.masterName}</div>
				   				<div class="dec">{item.slaveName}</div>
				   			
				   					<div class="price">¥{item.price}</div>
			
				   				<div class="count"><span>快递:0.00元</span>  <span class="sell">销量:{item.sell}</span>  <span class="guo">全国</span></div>
				   			</div>
				   		})
				   }
				   
				   
				    
				   </div>
				    <div class="select-m">
				     	<span>选择</span>
				     	<span>规格</span>
				     	<span>数量</span>
				     </div>
				     <div class="pro-main">
				     	
				    </div>
				     	
				  
				</div>
			</div>
		)
	}
	
	
	componentWillMount(){
		ShopServices.getProdetailsData()
		.then((res)=>{
			console.log(res);
		
			this.setState({
				bannerData:res.prodec
			})
			
			
			this.state.content.push(res)
			this.setState({
				content:this.state.content
			})
			
			bannerSwiper.update();
			bannerSwiper.slideTo(1, 0);
			
		})
		
		ShopServices.getProimgData()
		.then((res)=>{
			//console.log(res);
			
			this.setState({
				proimg:res
			})
		})
		
	}
	
    componentDidMount(){
		console.log(this.state.bannerData.length)
		bannerSwiper = new Swiper(this.refs.banner, {
			loop:true,
			autoplay : 3000,
			pagination: '.swiper-pagination'
		});
	}

	
}
1