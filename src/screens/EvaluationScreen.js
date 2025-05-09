import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { MotiView } from 'moti';
import AnimatedButton from '../components/AnimatedButton';
import PropertyCard from '../components/PropertyCard';

export default function EvaluationScreen() {
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [rooms, setRooms] = useState('');
  const [result, setResult] = useState(null);

  const evaluate = () => setResult({ price: '€ 360.000', area, rooms });
  const fields = [
    { placeholder: 'Adresse', value: address, setter: setAddress, keyboard: 'default' },
    { placeholder: 'Fläche (m²)', value: area, setter: setArea, keyboard: 'numeric' },
    { placeholder: 'Zimmer', value: rooms, setter: setRooms, keyboard: 'numeric' }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text className="text-2xl font-semibold mb-6 text-primary">Immobilienbewertung</Text>
        {fields.map((f, i) => (
          <MotiView key={i} from={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: i * 100 }}>
            <View className="bg-white p-4 rounded-xl shadow mb-4">
              <TextInput
                placeholder={f.placeholder}
                value={f.value}
                onChangeText={f.setter}
                className="text-base"
                keyboardType={f.keyboard}
              />
            </View>
          </MotiView>
        ))}
        <AnimatedButton label="Berechnen" icon="calculator" onPress={evaluate} variant="primary" />
        {result && <PropertyCard price={result.price} area={result.area} rooms={result.rooms} />}
      </ScrollView>
    </SafeAreaView>
  );
}