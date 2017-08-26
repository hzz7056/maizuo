import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/card.css'

import Qcard from '../views/Card/Qcard.js'
import Ecard from '../views/Card/Ecard.js'

export default class Card extends Component{
	constructor(){
		super();
		this.state={
			navData:['卖座卡','电子卖座卡'],
			selectNav:0
		}
	}
	
	render(){
		
		let from= this.state.selectNav == 0 ? <Qcard /> : <Ecard/>;
		
		return(
		<div id="card" class="page">
			<div class="card-content">
				<div class="nav-select">
				<nav class="list">
					{
						this.state.navData.map((item,index)=>{
							return <li class={index==this.state.selectNav?'active':''} onClick={this.selectAction.bind(this,index)} key={index}>{item}</li>
						})
					}
				</nav>
				</div>
				
				{from}
				
				
			</div>
		</div>
		)
	}
	
	
	
	
	
	selectAction(index){
		console.log(index)
		
		this.setState({
			selectNav:index
		})
		
		
	}
	
}