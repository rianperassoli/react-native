import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';
import AboutScreen from './src/screen/AboutScreen';
import LoginScreen from './src/screen/LoginScreen';

const NavegadorStack = createStackNavigator({

  Home: { screen: HomeScreen },  
  About: { screen: AboutScreen },
  Login: { screen: LoginScreen },

});

const App = createAppContainer(NavegadorStack);

export default App;