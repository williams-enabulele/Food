import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
  Search: SearchScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
})


export default createAppContainer(navigator);