import React from 'react';
import { View, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';

export default function Overlay({ children }) {
  const { width } = Dimensions.get('window');
  return (
    <BlurView
      intensity={60}
      tint="light"
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderRadius: 24,
            padding: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 10
          }}
        >
          {children}
        </View>
      </View>
    </BlurView>
  );
}