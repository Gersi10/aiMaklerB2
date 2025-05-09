import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

export default function PropertyCard({ price, area, rooms }) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#E5E5EA']}
      style={{
        padding: 20,
        borderRadius: 16,
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 4
      }}
    >
      <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 4 }}>Preis</Text>
      <Text style={{ color: '#141850', fontSize: 18, fontWeight: '600', marginBottom: 8 }}>{price}</Text>
      {area && <Text style={{ fontSize: 14 }}>Fläche: {area} m²</Text>}
      {rooms && <Text style={{ fontSize: 14 }}>Zimmer: {rooms}</Text>}
    </LinearGradient>
  );
}