import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as NavigationService from '../services/navigationService';
import CountryForm from '../screens/countryForm';
import CountryDetail from '../screens/countryDetail';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName="countryForm"
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Stack.Screen name="countryForm" component={CountryForm} options={{headerShown: false}} />
        <Stack.Screen name="countryDetail" component={CountryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
