import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Landing } from '../pages/Landing';
import { GiveClasses } from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

export type StackParamList = {};

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Landing' component={Landing} />
        <Screen key='GiveClasses' name='GiveClasses' component={GiveClasses} />
        <Screen key='Study' name='Study' component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
