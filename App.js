import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
})


export default createAppContainer(navigator);