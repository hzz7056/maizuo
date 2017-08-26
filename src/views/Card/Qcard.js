import React,{Component} from 'react'

import '../../css/card.css'

export default class Qcard extends Component{
	constructor(){
		super();
		this.state={
			cardVal:'',
			pwdVal:''
		}
	}
	
	render(){
		return(
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
	
	
}
