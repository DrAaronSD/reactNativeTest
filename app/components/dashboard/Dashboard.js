'use strict';

let React = require('react-native');
let {
  View,
  Text,
} = React;


let Dashboard = React.createClass({
	displayName: 'Dashboard',

	render() {
		return (
			<View>
				<Text>Dashboard</Text>
			</View>
		);
	}
});

module.exports = Dashboard;