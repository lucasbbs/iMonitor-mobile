import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { TeacherList } from '../pages/TeacherList';
import { Favorites } from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          flex: 0,
          width: 50,
          height: 50,
        },

        tabBarLabelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        tabBarInactiveBackgroundColor: '#fafafc',
        tabBarInactiveTintColor: '#c1bccc',
        tabBarActiveBackgroundColor: '#ebebf5',
        tabBarActiveTintColor: '#32264d',
      }}
    >
      <Screen
        name='TeacherList'
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='ios-easel'
              color={focused ? '#8257e5' : color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name='Favorites'
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='ios-heart'
              color={focused ? '#8257e5' : color}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
