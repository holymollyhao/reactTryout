import React, { Component } from 'react';
import Todolistelem from './Todolistelem.js'


class Todolist extends Component{
	render(){
		console.log(this.props.valueList)
		const valuelist = this.props.valueList.map(elem=>
			<Todolistelem elem = {elem} key = {elem.id} handleDelete = {this.props.handleDelete} changeElem = {this.props.changeElem}/>
		)
		return(
			<div>
				{valuelist}
			</div>
		)
	}	
}

export default Todolist;