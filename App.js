import React from  'react'
import Home from  './screen/Home'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from  './screen/Profile'

const Stack = createStackNavigator();
Stack.Navigator.defaultProps = {
  headerMode: 'none'
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App