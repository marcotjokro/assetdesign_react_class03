import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class Main extends React.Component {
	
	state={
		imgSrc: null
	}
	
	handleInp=(text)=>{
		if(text === this.props.keyword){
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
      <View style={styles.container}>
        <TextInput 
					placeholder="Type something"
					onChangeText={this.handleInp}
					style={{width: 100}}
					/>
				<Image 
					source={this.state.imgSrc}
					style={{width: 100, height: 100}}
					/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
