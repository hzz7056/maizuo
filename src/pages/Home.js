import React, {Component} from 'react'
import LazyLoad from 'react-lazyload';
import HomeServices from '../services/HomeServices.js'

import '../css/home.css'

let bannerSwiper = null;
let contentScroll;
export default class Home extends Component {
	constructor(routeProps) {
		super();
		
		let {match,history,location} = routeProps;

		this.state = {
			bannerData: [],
			listData: [],
			listsoonData: [],
			history
		}
	}

	render() {
		return(
			<div id="home" class="page">
			<div class="warp">
				<div class="home-m">
			  
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
							return <div class="item" key={index} onClick={this.goDeatail.bind(this,item.id)}>
										
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
						<button type="button" class="morebtn" onClick={this.NowAction.bind(this)}>更多即将上映电影</button>
					</div>
				
					<div class="line-box">
						<div class="soon">即将上映</div>
					</div>
					
					
					
					{
						this.state.listsoonData.map((item,index)=>{
							return <div class="item" key={index} onClick={this.goDeatail.bind(this,item.id)}s>
										<img src={item.cover.origin}/>
										<div class="soon-con">
											<div class="title">{item.name}</div>
											<div class="date">8月25日上映</div>
										</div>
									</div>
						})
						
					}
					
					
					<div class="more">
						<button type="button" class="morebtn" onClick={this.SoonAction.bind(this)}>更多即将上映电影</button>
					</div>
				</div>
				
				</div>
			</div>	
		</div>
		)
	}

	componentWillMount() {
		//请求轮播图
		setTimeout(() => {
			HomeServices.getHomeBannerData()
				.then((res) => {

					console.log(res)
					//因为需要设置loop,而dom被js绑定了	
					//数据需要添加第一张和最后一张
					//将最后一张添加到第一的位置
					res.splice(0, 0, res[res.length - 1]);
					//将第一张添加到最后一个位置
					res.push(res[1]);
					this.setState({
						bannerData: res
					})
					bannerSwiper.update();
					bannerSwiper.slideTo(1, 0);

				})

			//请求上映电影
			HomeServices.getHomelistData()
				.then((res) => {
					if(res) {
						this.setState({
							listData: res
						})
					}
				})

			//请求即将上映电影
			HomeServices.getHomelistSoonData()
				.then((res) => {
					console.log(res)
					if(res) {
						this.setState({
							listsoonData: res
						})
					}

				})

		}, 600)
		
	}

	componentDidMount() {
		console.log(this.state.bannerData.length)
		bannerSwiper = new Swiper(this.refs.banner, {
			loop: true
		});
		
		 contentScroll = new IScroll('#home',{
				protoType:3
			})
		
		contentScroll.on('scrollStart',()=>{
			contentScroll.refresh();
		})
		
}
	   
	goDeatail(id) {
		console.log(id)
		this.state.history.push({
				pathname:'/list-details',
				state:{
					id
				}
			})
	}
	
	
	NowAction(){
		console.log(11)
		this.state.history.push({
			pathname:'/movies',
			state:{
				navindex:0
			}
		})
		
	}
	
	
	SoonAction(){
		this.state.history.push({
			pathname:'/movies',
			state:{
				navindex:1
			}
		});
		
	}

}