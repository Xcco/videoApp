import { AppRegistry } from 'react-native';
import { TabNavigator,DrawerNavigator } from 'react-navigation';
import videoList from './src/pages/list'
import Edit from './src/pages/edit'
import Account from './src/pages/account'
import Detail from './src/pages/list/detail'


//将navigator独立出来会报错 暂时写在这 后续调整
const Navigator = TabNavigator({
    List: { screen: videoList },
    Edit: { screen: Edit },
    Account: { screen: Account },
    });

AppRegistry.registerComponent('projectApp', () => Navigator);
