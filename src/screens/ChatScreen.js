import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';
import { MotiView } from 'moti';
import AnimatedButton from '../components/AnimatedButton';
import * as Speech from 'expo-speech';
import { OPENAI_API_KEY } from '@env';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    // User-Message pushen
    const userMsg = { from: 'user', text: input };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');

    // ChatGPT anfragen
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'Du bist ein bayerischer Immobilienberater und sprichst ausschließlich im Münchner Dialekt. Sei freundlich und hilfsbereit.'
            },
            ...newHistory.map(m => ({
              role: m.from === 'user' ? 'user' : 'assistant',
              content: m.text
            }))
          ]
        })
      });
      const { choices } = await res.json();
      const botText = choices[0].message.content.trim();

      // Antwort pushen
      const botMsg = { from: 'assistant', text: botText };
      setMessages([...newHistory, botMsg]);

      // Per TTS vorlesen
      Speech.speak(botText, {
        language: 'de-DE',
        pitch: 1.0,
        rate: 1.0
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((m, i) => (
          <MotiView
            key={i}
            from={{ opacity: 0, translateY: m.from==='user'?20:-20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: i * 100 }}
            style={[
              styles.bubble,
              m.from==='user' ? styles.userBubble : styles.botBubble
            ]}
          >
            <Text
              style={[
                styles.msgText,
                m.from==='user' ? styles.userText : styles.botText
              ]}
            >
              {m.text}
            </Text>
          </MotiView>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Frag mi schau ma…" 
        />
        <AnimatedButton
          variant="circle"
          icon="send"
          onPress={sendMessage}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  chatContainer: { padding: 16 },
  bubble: {
    maxWidth: '80%',
    borderRadius: 16,
    padding: 12,
    marginVertical: 4
  },
  userBubble: {
    backgroundColor: '#141850',
    alignSelf: 'flex-end'
  },
  botBubble: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start'
  },
  msgText: { fontSize: 14 },
  userText: { color: '#FFFFFF' },
  botText: { color: '#333333' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF'
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#F1F2FF',
    borderRadius: 22,
    paddingHorizontal: 16,
    marginRight: 8
  }
});
