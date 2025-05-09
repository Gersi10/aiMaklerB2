import React from 'react';
import { SafeAreaView, ScrollView, Dimensions, Text } from 'react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedButton from '../components/AnimatedButton';

export default function HomeScreen({ navigation }) {
  const { width } = Dimensions.get('window');
  const buttons = [
    { label: 'Immobilienbewertung', icon: 'calculator', screen: 'Evaluation' },
    { label: 'Exposé erstellen',      icon: 'document-text', screen: 'Expose'     },
    { label: 'Termin vereinbaren',     icon: 'calendar',      screen: 'Schedule'   },
    { label: 'Anzeigen posten',        icon: 'megaphone',     screen: 'Listings'   }
  ];

  return (
    <LinearGradient colors={['#0A84FF', '#5AC8FA']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 800 }}
          style={{ padding: 24 }}
        >
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>
            Willkommen zurück!
          </Text>
          <Text style={{ fontSize: 16, color: 'white', opacity: 0.9 }}>
            Was möchten Sie heute tun?
          </Text>
        </MotiView>
        <ScrollView contentContainerStyle={{ padding: 24 }}>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 500, type: 'spring', damping: 15 }}
            style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
          >
            {buttons.map((btn) => (
              <AnimatedButton
                key={btn.screen}
                label={btn.label}
                icon={btn.icon}
                variant="primary"
                onPress={() => navigation.navigate(btn.screen)}
                style={{ width: (width - 72) / 2 }}
              />
            ))}
          </MotiView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}