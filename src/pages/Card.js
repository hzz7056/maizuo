import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/card.css'

export default class Card extends Component{
	constructor(){
		super();
		this.state={
			navData:['卖座卡','电子卖座卡'],
			cardVal:'',
			pwdVal:'',
			selectNav:0
		}
	}
	
	render(){
		return(
		<div id="card" class="page">
			<div class="card-content">
				<div class="nav-select">
				<nav class="list">
					{
						this.state.navData.map((item,index)=>{
							return <Link to="" class={index==this.state.selectNav?'active':''} onClick={this.selectAction.bind(this,index)} key={index}>{item}</Link>
						})
					}
				</nav>
				</div>
				<form>
					<div class="cardnum">
						<label>卡号:</label>
						<input ref="cardnum" value={this.state.cardVal} onChange={this.changeCard.bind(this)} type="text" name="cardnum" placeholder="输入卡号" />
						<div class="input-bo"></div>
					</div>
					
					<div class="cardnum">
						<label>密码:</label>
						<input ref="password" value={this.state.pwdVal} onChange={this.changePwd.bind(this)} type="password" name="password" placeholder="输入密码" />
						<div class="input-bo"></div>
					</div>
					<div class="toast"></div>
					
					<div class="select-bg">
					<button type="button" class="select">查询</button>
					</div>
				</form>
			</div>
		</div>
		)
	}
	
	//卡号框change事件
	changeCard(){
		var cardnum=this.refs.cardnum.value;
		this.setState({
			cardVal:cardnum
		})
	}
	
	
	//密码框change事件
	changePwd(){
		var password=this.refs.password.value;
		this.setState({
			pwdVal:password
		})
	}
	
	
	selectAction(index){
		console.log(index)
		//console.log(this.state.history)
		this.setState({
			selectNav:index
		})
		
		if (index==0) {
			console.log(11)
			//this.state.history.push('/now-play');
		}
	}
	
}