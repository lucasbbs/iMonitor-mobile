import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Landing } from '../pages/Landing';
import { GiveClasses } from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import { SignIn } from '../pages/SignIn';
import { FirstStep } from '../pages/SignUp/FirstStep';
import { SecondStep } from '../pages/SignUp/SecondStep';
import { Confirmation } from '../pages/Confirmation';
import { Profile } from '../pages/Profile';

export type StackParamList = {};

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Landing' component={Landing} />
      <Screen name='Confirmation' component={Confirmation} />
      <Screen name='Profile' component={Profile} />
      <Screen key='GiveClasses' name='GiveClasses' component={GiveClasses} />
      <Screen key='Study' name='Study' component={StudyTabs} />
    </Navigator>
  );
}
export default AppStack;
