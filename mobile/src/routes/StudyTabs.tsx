import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favourites from '../pages/Favourites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 84 : 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 24 : 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused}) => {
            return (
              // <FontAwesome5 name="chalkboard" size={20} color={focused ? '#8257E5' :color} />
              // <FontAwesome5 name="chalkboard-teacher" size={20} color={focused ? '#8257E5' :color} />
              <Ionicons name="ios-easel" size={size} color={focused ? '#8257E5' :color} />
            );
          }
        }}
      />
      <Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused}) => {
            return (
              <Ionicons name="ios-heart" size={size} color={focused ? '#8257E5' :color} />
              // <Ionicons name="ios-heart-empty" size={size} color={focused ? '#8257E5' :color} />
              // <FontAwesome5 name="heart" size={22} color={focused ? '#8257E5' :color} />
            );
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;