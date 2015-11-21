//<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>

'use strict';

let React = require('react-native');
let {
  AppRegistry,
} = React;

// Polyfill the process functionality needed for minimongo-cache
global.process = require("./app/config/process.polyfill");

let LayoutContainer = require('./app/components/LayoutContainer');

let RheaTestProject = React.createClass({
  render: function() {
    return <LayoutContainer />;
  }
});

AppRegistry.registerComponent('RheaTestProject', () => RheaTestProject);
