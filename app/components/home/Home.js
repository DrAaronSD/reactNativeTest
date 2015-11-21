'use strict';

import CardIO from 'react-native-card.io';

let React = require('react-native');
let {
  View,
  Text,
} = React;


let Home = React.createClass({
	displayName: 'Home',

	render() {
		return (
			<View>
				<Text>Home</Text>
				<CardIO  
					style={
    					{
      						flex: 1,
      						backgroundColor: 'black',
    					}
  					}
  					onSuccess={
    					( cardInfo ) => console.log(cardInfo)
  					}
  					onFailure={
    					( err ) => console.error(err)
  					}/>
			</View>
		);
	}
});

module.exports = Home;