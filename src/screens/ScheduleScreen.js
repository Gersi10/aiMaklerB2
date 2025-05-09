import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AnimatedButton from '../components/AnimatedButton';

export default function ScheduleScreen() {
  const [date, setDate] = useState('');
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Calendar
        onDayPress={d => setDate(d.dateString)}
        markedDates={date ? { [date]: { selected: true, selectedColor: '#141850' } } : {}}
        theme={{ calendarBackground: '#FFFFFF', todayTextColor: '#5AC8FA', dayTextColor: '#333' }}
        style={{ margin: 16, borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.1, elevation: 4 }}
      />
      <Text className="text-center text-lg mb-4">{date ? `Ausgewählt: ${date}` : 'Kein Datum gewählt'}</Text>
      <AnimatedButton label="Termin speichern" icon="calendar" onPress={() => {}} variant="primary" />
    </SafeAreaView>
  );
}