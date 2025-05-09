import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { MotiView } from 'moti';
import Overlay from '../components/Overlay';
import AnimatedButton from '../components/AnimatedButton';

export default function ExposeScreen() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [preview, setPreview] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text className="text-2xl font-semibold mb-6 text-primary">Exposé erstellen</Text>
        {[
          { label: 'Titel', val: title, setter: setTitle, multiline: false },
          { label: 'Beschreibung', val: desc, setter: setDesc, multiline: true },
          { label: 'Preis', val: price, setter: setPrice, multiline: false }
        ].map((f, i) => (
          <MotiView key={i} from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 100 }}>
            <View className="bg-white p-4 rounded-xl shadow mb-4">
              <TextInput
                placeholder={f.label}
                value={f.val}
                onChangeText={f.setter}
                multiline={f.multiline}
                className="text-base"
              />
            </View>
          </MotiView>
        ))}
        <AnimatedButton label="Vorschau" icon="document-text" onPress={() => setPreview(true)} variant="outline" />
      </ScrollView>
      {preview && (
        <Overlay>
          <Text className="text-xl font-semibold text-primary mb-4">{title}</Text>
          <Text className="text-base mb-4">{desc}</Text>
          <Text className="text-xl font-bold mb-6">{price}</Text>
          <AnimatedButton label="Schließen" onPress={() => setPreview(false)} variant="primary" />
        </Overlay>
      )}
    </SafeAreaView>
  );
}