'use strict';

let React = require('react-native');
let {
  View,
  Text,
} = React;

let Layout = require('./Layout');

let LayoutContainer = React.createClass({
	displayName: 'LayoutContainer',

	render() {
		return (
			<Layout />
		);
	}
});

module.exports = LayoutContainer;