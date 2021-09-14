import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { StylesProvider } from "@material-ui/core/styles";
//import { styled } from '@material-ui/core/styles';

class Todolistform extends Component{
	
	state = {
		value : '',
	}
	
	setValue = (e)=>{
		this.setState({
			value : e.target.value
		})
	}
	
	handleSubmit = (e)=>{
		e.preventDefault();
		const currval = this.state.value
		this.setState({
			value : '',
		})
		this.props.addElement(currval)
	}
	
	render(){
		
		const StyledButton = styled(Button)`
			background-color: skyblue;
		`;
		
		return(
			<StylesProvider injectFirst>
				<Grid
				  container
				  direction="row"
				  justifyContent="center"
				  alignItems="center"
				  spacing = {3}
				>
					<form onSubmit = {this.handleSubmit}>
					<Input label = "입력" onChange = {this.setValue} value = {this.state.value}></Input>
					<StyledButton type = 'submit'>추가</StyledButton>
					</form>
				</Grid>
			</StylesProvider>
		)
	}
}

export default Todolistform;