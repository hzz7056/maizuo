import React,{Component} from 'react'

import '../css/me.css'

let timer=null;

export default class Me extends Component{
	constructor({history}){
		super();
		this.state={
			history,
			userVal:'',
			pwdVal:'',
			toast:'',
			verficVal:'发送验证码',
			time:'',
			flag:false
		}
	}
	
	render(){
			var btn=this.state.flag ? <span class="sendverfic" onTouchStart={this.sendAction.bind(this)}>{this.state.verficVal}</span> : null;
			
		return(
		<div id="me" class="page">
			<div class="login-content">
				<form>
					<div class="uname">
						<input ref="username" value={this.state.userVal} onChange={this.changeUser.bind(this)} type="text" name="username" placeholder="输入手机号/邮箱" />
						{btn}
						<div class="input-bo"></div>
					</div>
					
					<div class="uname">
						<input ref="password" value={this.state.pwdVal} onChange={this.changePwd.bind(this)} type="password" name="password" placeholder="输入密码/验证码" />
						<div class="input-bo"></div>
					</div>
					<div class="toast">{this.state.toast}</div>
					
					<div class="login-bg">
					<button type="button" class="login" onTouchStart={this.btnAction.bind(this)}>登录</button>
					</div>
				</form>
			</div>
		</div>
		)
	}
	
	
	//点击登录按钮触发的事件
	btnAction(){
		var username=this.refs.username.value;
		var password=this.refs.password.value;
		var reg=/^1[34578]\d{9}$/;
		//判断用户名是否为空
		if (username == '') {
			this.setState({
				toast:'手机号或邮箱不能为空'
			})
		}
		//判断是否符合正则的条件
	   	else if (!reg.test(this.state.userVal)) {
			this.setState({
				toast:'请输入正确的手机号或邮箱'
			})
		}
	   	//判断密码是否为空
	   	else if (password == '') {
	   		this.setState({
				toast:'密码不能为空'
			})
	   	}else{
	   		console.log('登录成功');
	   		this.state.history.push('/center')
	   	}
		
	}
	
	//用户框触发的change事件
	changeUser(){
		var reg=/^1[34578]\d{9}$/;
		var username=this.refs.username.value;
		console.log(username)
		//判断用户用户名长度为11
		if (username.length == 11) {
			console.log(1111);
			//判断是否符合正则
			if (reg.test(username)) {
				this.setState({
					flag:true
				})
			}
		}
		else{
			  this.setState({
					flag:false
			 })
			}
		
		this.setState({
			userVal:username
		})
	}
	
	
	//密码框change事件
	changePwd(){
		var password=this.refs.password.value;
		this.setState({
			pwdVal:password
		})
	}
	
	
	//点击发送验证码触发的事件
	sendAction(){
		//定义初始时间
		var time=3
		//定义初始验证码
		var Num='';
		//清空前一次定时器
		clearInterval(timer);
		//创建定时器
		 timer = setInterval(()=>{
		 	
			time--;
			
			this.setState({
				time
			})
			
			this.setState({
				verficVal:'重发'+'('+time+')'
			})
			
			if (time == 0) {
				clearInterval(timer)
				//改变按钮的值
				this.setState({
				verficVal:'发送验证码'
				})
				
				
				//生成6位数随机验证码
				for(var i=0;i<6;i++) { 
					Num+=Math.floor(Math.random()*10); 
				} 
				console.log(Num)
				this.setState({
					pwdVal:Num
				})
				
			}
		},1000)
		 
	}
	
}
