import React, { Component } from 'react';
import Main from "./Main";

class Page extends Component {
  render() {
		
		//Switching & showing components through different page
		var comp = null;
		
		//Switch is basically like if and else, break is the end of the If, case is like ELSE IF, default is ELSE
		switch(this.props.page){
			case 1:
				//Show Main 1
				comp = <Main keyword="happy" imgSrc={require("./../imgs/happy.png")} />
				break;
				
			case 2:
				//Show Main 2
				comp = <Main keyword="sad" imgSrc={require("./../imgs/sad.png")} />
				break;
				
			case 3:
				//Show Main 2
				comp = <Main keyword="gundam" imgSrc={require("./../imgs/gundam.jpg")} />
				break;
			
			default:
				//Show default
				comp = <div>Welcome to my App</div>
				break;
		}
		
    return (
      <div>
        {comp}
      </div>
    );
  }
}

export default Page;