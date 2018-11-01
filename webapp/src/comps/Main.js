import React, { Component } from 'react';

class Main extends Component {
  
	state={
		imgSrc: null
	}
	
	handleInp=()=>{
		if(this.refs.myInp.value === this.props.keyword){
//			var src = require("./../imgs/happy.png");
			this.setState({
				imgSrc: this.props.imgSrc
			})
		} else {
			this.setState({
				imgSrc: null
			})
		}
	}
	
	render() {
    return (
      <div>
        <input ref="myInp" type="text" placeholder="Type something" onChange={this.handleInp} />
				<br/><br/>
				<img src={this.state.imgSrc} alt=""/>
				<div>{this.props.keyword}</div>
				<br/><br/>
      </div>
    );
  }
}

export default Main;