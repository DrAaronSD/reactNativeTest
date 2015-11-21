let React = require('react-native');
let {
  View,
  Text,
  TabBarIOS,
  NavigatorIOS,
  Navigator,
  ActionSheetIOS,
} = React;

let Home = require('./home/Home');
let Dashboard = require('./dashboard/Dashboard');

let Layout = React.createClass({
	displayName: 'Layout',

	getInitialState() {
		return {
			selectedTab: 'home'
		}
	},

	handleMore(orders) {
		let BUTTONS = ["Orders", "Account", "Schedule", "Destruct", "Cancel"];
    let DESTRUCTIVE_INDEX = 3;
    let CANCEL_INDEX = 4; 

		ActionSheetIOS.showActionSheetWithOptions({
			options: BUTTONS,
			cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
		});
	},

	renderHomeNavigator() {
		return (
			<NavigatorIOS
				style={{flex: 1}}
        		initialRoute={{
          			component: Home,
          			title: 'Home',
          			rightButtonTitle: 'More',
          			onRightButtonPress: () => {
            			this.handleMore(false);
            		}
        		}}/>
    	);
	},

  renderDashboardScene(route, navigator) {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: Dashboard,
          title: 'Dashboard Scene',
          leftButtonTitle: 'Less',
          rightButtonTitle: 'More',
          onRightButtonPress: () => {
            this.handleMore(true);
          }
        }}/>
    );
  },

  renderDashboardNavigator() {
    return (
      <Navigator
        ref="dashboardNavigator"
        initialRoute={{name: 'First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <Dashboard
            name={route.name}
            onForward={() => {
              let nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}/>
          }/>
    );
  },

  render() {
    return (
     <TabBarIOS>
      <TabBarIOS.Item
        title="Home"
        icon={require('../images/medical50.png')}
        selected={this.state.selectedTab === 'home'}
        onPress={() => {
          this.setState({
            selectedTab: 'home',
          });
        }}>
        {this.renderHomeNavigator()}
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Search"
        icon={require('../images/first-aid.png')}
        selected={this.state.selectedTab === 'search'}
        onPress={() => {
          this.setState({
            selectedTab: 'search',
          });
        }}>
        {this.renderDashboardNavigator()}
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Dashboard"
        icon={require('../images/settings48.png')}
        selected={this.state.selectedTab === 'dashboard'}
        onPress={() => {
          this.setState({
            selectedTab: 'dashboard',
          });
        }}>
        {this.renderDashboardNavigator()}
      </TabBarIOS.Item>
     </TabBarIOS>
     )
  }
});

module.exports = Layout;


