import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/Cinema.js'
import Shop from './pages/Shop.js'
import Me from './pages/Me.js'
import Card from './pages/Card.js'
import City from './pages/City.js'

import AppHeader from './views/common/AppHeader.js'
import SlideBar from './views/common/SlideBar.js'
import HomelistDetails from './views/Home/HomelistDetails.js'
import NowPlay from './views/Movies/nowPlay.js'
import SoonPlay from './views/Movies/soonPlay.js'
import Center from './views/Me/Center.js'
import ProDetails from './views/Shop/productDetails.js'


import './css/app.css'

export default class App extends Component{
	constructor(){
		super();
		
		this.state={
			showBar:false,
			headerTitle:'卖座电影'
		}
	}
	
	
	render(){
		return(
			<BrowserRouter>
			<div id="root">
			<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}/>
			
			<Route path="/" render={({history,location})=>{
				return <SlideBar history={history}
								 show={this.state.showBar}
								 pathname={location.pathname} 
								 hideHandle={this.menuHandle.bind(this)}/>
			}}/>
			
			<SlideBar />
				
			<Route path="/" exact component={Home} />
			<Route path="/list-details" component={HomelistDetails} />
			
			<Route path="/movies" component={Movies} />
			
			<Route path="/now-play" component={NowPlay} />
			<Route path="/soon-play" component={SoonPlay} />
			
			<Route path="/cinema" component={Cinema} />
			<Route path="/shop" component={Shop} />
			<Route path="/prodetails" component={ProDetails} />
			
			<Route path="/me" component={Me} />
			<Route path="/center" component={Center} />
			
			<Route path="/card" component={Card} />
			<Route path="/city" component={City} />
				
			</div>
			
			</BrowserRouter>
		)
		
	}
	
	menuHandle(headerTitle){
		//控制列表显示/隐藏
		this.setState({showBar:!this.state.showBar})
		if (headerTitle) {
			this.setState({headerTitle})
		}
	}
	
}
