import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import styled from 'styled-components'

class Todolistelem extends Component{
	
	state = {
		onChange : false,
		value : ''
	}
	
	onChange = (e)=>{
		this.setState(
			{value : e.target.value}
		)
	}
	onDelete = (e)=>{
		// e.preventDefault()
		this.props.handleDelete(this.props.elem.id)
	}
	
	onUpdate = (e)=>{
		const cur = this.state.onChange
		if(cur){
			this.props.changeElem(this.props.elem.id, this.state.value)
		}
		this.setState(
			{onChange : !cur}
		)
		console.log("onUpdate called")
	}
	render(){
		
		if(!this.state.onChange){
			return (
				<Grid
				  container
				  direction="row"
				  justifyContent="space-between"
				  alignItems="center"
				>
					
					<Grid
						item
						xs = "8">
						{this.props.elem.value}
					</Grid>
					<Grid
						item
						xs = "2">
						<Button onClick = {this.onDelete} id = {this.props.elem.id}>-</Button>
					</Grid>
					<Grid
						item
						xs = "2">
						<Button onClick = {this.onUpdate}>change</Button>
					</Grid>
				</Grid>
			)
		}else{
			return (
				<Grid
				  container
				  direction="row"
				  justifyContent="space-between"
				  alignItems="center"
				>
					<Grid
						item
						xs = "8">
						<Input label = "입력" onChange = {this.onChange} value = {this.state.value}></Input>
					</Grid>
					<Grid
						item
						xs = "2">
						<Button onClick = {this.onDelete}>-</Button>
					</Grid>
					<Grid
						item
						xs = "2">
						<Button onClick = {this.onUpdate}>save</Button>
					</Grid>
					
				</Grid>
			)
		}
		
	}
}

export default Todolistelem;