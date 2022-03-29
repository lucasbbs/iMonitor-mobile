import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Confirmation } from '../pages/Confirmation';
// import { Splash } from '../pages/Splash';
import { SignIn } from '../pages/SignIn';
import { FirstStep } from '../pages/SignUp/FirstStep';
import { SecondStep } from '../pages/SignUp/SecondStep';
import { Confirmation } from '../pages/Confirmation';
// import { SignUpFirstStep } from '../pages/SignUp/SignUpFirstStep';
// import { SignUpSecondStep } from '../pages/SignUp/SignUpSecondStep';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
      <Screen name='SignIn' component={SignIn} />
      <Screen name='FirstStep' component={FirstStep} />
      <Screen name='SecondStep' component={SecondStep} />
      <Screen name='Confirmation' component={Confirmation} />
    </Navigator>
  );
}
