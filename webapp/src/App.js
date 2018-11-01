import React, { Component } from 'react';
import './App.css';
import Page from "./comps/Page";

class App extends Component {
  
	state={
		page:0
	}
	
	handlePage=(num)=>{
		//Change Pages either up or down
		this.setState({
			page: this.state.page+num
		})
	}
	
	render() {
    return (
      <div className="Main">
        <div>
					<button onClick={this.handlePage.bind(this, -1)}>Prev</button>
					<button onClick={this.handlePage.bind(this, 1)}>Next</button>
				</div>
				<div>{this.state.page}</div>
				<Page page={this.state.page}/>
      </div>
    );
  }
}

export default App;