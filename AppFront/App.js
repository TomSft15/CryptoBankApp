import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import MainPage from './src/pages/MainPage';
import Header from './src/components/Header';
import ProfilePage from './src/pages/ProfilePage';
import AccountsPage from './src/pages/AccountPage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator({  }) {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={MainPage} options={({ navigation }) => ({header: (props) => <Header {...props} navigation={navigation} title="Dashboard" />})} />
      <Drawer.Screen name="Accounts" component={AccountsPage} options={({ navigation }) => ({header: (props) => <Header {...props} navigation={navigation} title="Accounts" />})} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPage">
          <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
          <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown: false}}/>
          <Stack.Screen name="MainPage" component={DrawerNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="ProfilePage" component={ProfilePage} options={{header: (props) => <Header {...props} title="Profile" />}}/>

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;