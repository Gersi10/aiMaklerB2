import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import EvaluationScreen from '../screens/EvaluationScreen';
import ExposeScreen from '../screens/ExposeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Tab = createBottomTabNavigator();
const ICONS = {
  Home: 'home',
  Evaluation: 'calculator',
  Expose: 'document-text',
  Schedule: 'calendar',
  Listings: 'megaphone'
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={ICONS[route.name]}
            size={size}
            color={focused ? '#141850' : '#8E8E93'}
          />
        ),
        tabBarActiveTintColor: '#141850',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: { backgroundColor: 'white', borderTopWidth: 0, elevation: 5 }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Evaluation" component={EvaluationScreen} options={{ title: 'Bewertung' }} />
      <Tab.Screen name="Expose" component={ExposeScreen} options={{ title: 'Exposé' }} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ title: 'Termin' }} />
      <Tab.Screen name="Listings" component={ListingsScreen} options={{ title: 'Anzeigen' }} />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: 'Assistent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}