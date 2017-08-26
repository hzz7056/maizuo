import React,{Component} from 'react'

import '../../css/card.css'

export default class Ecard extends Component{
	constructor(){
		super();
		this.state={
			cardVal:''
			
		}
	}
	
	render(){
		return(
			<form>
					<div class="cardnum">
						<label>卡号:</label>
						<input ref="cardnum" value={this.state.cardVal} onChange={this.changeCard.bind(this)} type="text" name="cardnum" placeholder="输入15位电子卖座卡号" />
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
	
	
	
}
