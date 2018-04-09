//将navigator独立出来会报错
import { TabNavigator } from 'react-navigation';
import List from './src/pages/list'
import Edit from './src/pages/edit'
import Account from './src/pages/account'
import Detail from './src/pages/list/detail'


const Navigator = TabNavigator({
    List: { screen: videoList },
    Edit: { screen: Edit },
    Account: { screen: Account },
    });
export default Navigator