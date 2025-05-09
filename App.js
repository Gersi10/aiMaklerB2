import 'react-native-gesture-handler';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <TailwindProvider>
      <LinearGradient colors={['#FFFFFF', '#F2F2F7']} style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <AppNavigator />
      </LinearGradient>
    </TailwindProvider>
  );
}