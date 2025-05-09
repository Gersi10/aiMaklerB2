import React, { useState } from 'react';
import { SafeAreaView, Text, View, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import AnimatedButton from '../components/AnimatedButton';

const portals = [
  { name: 'ImmoScout', icon: 'map' },
  { name: 'ImmoNet', icon: 'search' },
  { name: 'ImmoWelt', icon: 'earth' },
  { name: 'eBay Kleinanzeigen', icon: 'logo-ebay' }
];

export default function ListingsScreen() {
  const [sel, setSel] = useState({});

  return (
    <SafeAreaView className="flex-1 bg-background p-6">
      <Text className="text-2xl font-semibold mb-6 text-primary">Anzeigen posten</Text>
      {portals.map((p, i) => (
        <MotiView key={p.name} from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 100 }}>
          <View className="flex-row justify-between items-center bg-white p-4 rounded-xl mb-3 shadow">
            <View className="flex-row items-center">
              <Ionicons name={p.icon} size={24} color="#141850" style={{ marginRight: 12 }} />
              <Text className="text-base">{p.name}</Text>
            </View>
            <Switch value={!!sel[p.name]} onValueChange={() => setSel(prev => ({ ...prev, [p.name]: !prev[p.name] }))} />
          </View>
        </MotiView>
      ))}
      <AnimatedButton label="Posten" icon="send" onPress={() => {}} variant="primary" />
    </SafeAreaView>
  );
}