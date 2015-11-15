'use strict';

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
			</View>
		);
	}
});

module.exports = Home;