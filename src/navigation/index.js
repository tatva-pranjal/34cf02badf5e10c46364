import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Demo from '../screens/form';
import FlatList from '../screens/flatList'

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Demo"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="flatList" component={FlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
