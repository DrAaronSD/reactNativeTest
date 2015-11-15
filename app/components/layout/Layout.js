let React = require('react-native');
let {
  View,
  Text,
  TabBarIOS,
  NavigatorIOS,
  Navigator,
  ActionSheetIOS,
} = React;

let Home = require('../home/Home');
let Dashboard = require('../dashboard/Dashboard');




let Layout = React.createClass({
	displayName: 'Layout',

	getInitialState() {
		return {
			selectedTab: 'home'
		}
	},

	handleMore(orders) {
		let BUTTONS = ["Orders", "Account", "Schedule"];
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

  renderDashboardNavigator() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
            initialRoute={{
                component: Dashboard,
                title: 'Dashboard',
                rightButtonTitle: 'More',
                onRightButtonPress: () => {
                  this.handleMore(false);
                }
            }}/>
      );
  },

	render() {
		return (
			<TabBarIOS>
				<TabBarIOS.Item
          			title="Home"
          			
          			selected={this.state.selectedTab === 'home'}
          			onPress={() => {
            			this.setState({
              				selectedTab: 'home',
            			});
          			}}>
          			{this.renderHomeNavigator()}
          		</TabBarIOS.Item>
          		<TabBarIOS.Item
          			title="Dashboard"
          			
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


