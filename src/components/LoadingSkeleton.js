import React from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function LoadingSkeleton({ style }) {
  return (
    <Animated.View
      entering={FadeIn.duration(500).delay(200)}
      exiting={FadeOut.duration(300)}
      style={[{ backgroundColor: '#E5E5EA', borderRadius: 16 }, style]}
    />
  );
}