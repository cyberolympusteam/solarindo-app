/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import Splashscreen from "./Splashscreen.js";
import TabHome from "./TabHome.js";
import TabSettings from "./TabSettings.js";
import TabLightingLists from "./TabLightingLists.js";
import TabReports from "./TabReports.js";
import Details from "./Details.js";
import ReportDetails from "./ReportDetails.js";
import Main from "./Main.js";


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
	  <Tab.Navigator 
	  tabBarOptions={{
		activeTintColor: '#0B108C',
    inactiveTintColor: '#9DA8C1',
	  }}>
        <Tab.Screen
        name="Home"
        component={TabHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}/>
		<Tab.Screen
        name="LightingLists"
        component={TabLightingLists}
        options={{
          tabBarLabel: 'Lighting',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-bulb" color={color} size={size} />
          ),
        }}/>
		<Tab.Screen
        name="Reports"
        component={TabReports}
        options={{
          tabBarLabel: 'Problems',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-hammer" color={color} size={size} />
          ),
        }}/>
    <Tab.Screen name="Settings" component={TabSettings} 
		options={{
			tabBarLabel: 'Settings',
			tabBarIcon: ({ color, size }) => (
			  <Ionicons name="ios-settings" color={color} size={size} />
			),
		  }}/>
      </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
		
		{/* Tab Navigation */}
		<Stack.Screen name="Home" component={TabScreen} options={{ headerShown: false }}/>

		{/* Page Navigation */}
		<Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
		<Stack.Screen name="Details" component={Details} options={Details.navigationOptions}/>
		<Stack.Screen name="ReportDetails" component={ReportDetails} options={Details.navigationOptions}/>
		<Stack.Screen name="Settings" component={TabSettings} />
		<Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;