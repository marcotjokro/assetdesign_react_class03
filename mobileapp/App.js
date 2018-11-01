import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Page from "./comps/Page";

export default class App extends React.Component {
  
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
      <View style={styles.container}>
        <View>
					<Button 
						title="Prev"
						onPress={this.handlePage.bind(this, -1)}
						/>
					<Button 
						title="Next"
						onPress={this.handlePage.bind(this, 1)}
						/>
					<Text>{this.state.page}</Text>
					<Page page={this.state.page}/>
				</View>
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
