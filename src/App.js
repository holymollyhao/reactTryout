import React, { Component } from 'react';
// import './style/App.scss';
import Todolist from './components/Todolist.js'
import Todolistform from './components/Todolistform.js'
import styled from 'styled-components'

class App extends Component {
	
	id = 3
	state ={
		todolist : [
			{
				value : 'wow',
				id : 0
			},
			{
				value : 'this is',
				id : 1
			},
			{
				value : 'something',
				id : 2
			}
		]
	}
	
	addElem = (value)=>{
		console.log(this.id)
		console.log("submit form");
		const newelem = {value : value, id : this.id++};
		console.log(newelem)
		const newlist = [...this.state.todolist, newelem];
		this.setState({
			todolist : newlist
		})
		console.log(newlist);
	}
	
	changeElem = (id, value)=>{
		console.log("changeElem")
		console.log(id)
		console.log(value)
		const initial = this.state.todolist
		const newlist = initial.map(elem=>{
			if(elem.id === id){
				return {value : value , id : elem.id}
			}else{
				return elem
			}
		})
		console.log(newlist)
		this.setState({
			todolist : newlist
		})
		console.log("updated list")
	}
	
	handleDelete = (id)=>{
		console.log("delte item");
		const curlist = this.state.todolist;
		const newlist = curlist.filter(elem=> id !== elem.id)
		this.setState({
			todolist : newlist
		})
		console.log(newlist);
	}

	
	render() {
		
		const  Todolist_template = styled.div`
			background-color : white;
			width : 512px;
			box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			margin : 0 auto;
			margin-top : 4rem;
		`;
		const Todolist_title = styled.div`
			background-color : skyblue;
			font-size : 40px;
			text-align : center;
			padding : 20px;
			color : white;
		`;
		
		return (
			<Todolist_template>
				<Todolist_title>
					오늘 할 일
				</Todolist_title>
				<Todolistform setValue = {this.setValue} addElement = {this.addElem}/>
				<Todolist valueList = {this.state.todolist} handleDelete = {this.handleDelete} changeElem = {this.changeElem}/>
			</Todolist_template>
		);
	}
}

export default App;
