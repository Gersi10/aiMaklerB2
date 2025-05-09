import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

/**
 * AnimatedButton variants:
 * - primary: filled navy pill
 * - outline: light pill with navy border
 * - circle: navy circle icon
 */
export default function AnimatedButton({ label, icon, onPress, variant = 'primary' }) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  const COLORS = {
    navy: '#141850',
    light: '#F1F2FF',
    white: '#FFFFFF'
  };

  let buttonStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8
  };
  let innerStyle = {};
  let textStyle = {};

  if (variant === 'primary') {
    innerStyle = {
      backgroundColor: COLORS.navy,
      borderRadius: 25,
      height: 50,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };
    textStyle = { color: COLORS.white, fontSize: 16, fontWeight: '600', marginLeft: icon ? 8 : 0 };
  } else if (variant === 'outline') {
    innerStyle = {
      backgroundColor: COLORS.light,
      borderColor: COLORS.navy,
      borderWidth: 2,
      borderRadius: 25,
      height: 50,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };
    textStyle = { color: COLORS.navy, fontSize: 16, fontWeight: '600', marginLeft: icon ? 8 : 0 };
  } else if (variant === 'circle') {
    innerStyle = {
      backgroundColor: COLORS.navy,
      borderRadius: 24,
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center'
    };
    textStyle = {};
  }

  return (
    <Animated.View style={[buttonStyle, animatedStyle]}>
      <Pressable
        onPressIn={() => { scale.value = withSpring(0.9, { stiffness: 200 }); }}
        onPressOut={() => { scale.value = withSpring(1, { stiffness: 200 }); onPress(); }}
        style={innerStyle}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={variant === 'circle' ? 24 : 20}
            color={variant === 'primary' ? COLORS.white : COLORS.navy}
          />
        )}
        {label && <Text style={textStyle}>{label}</Text>}
      </Pressable>
    </Animated.View>
  );
}