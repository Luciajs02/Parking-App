import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReservedParkingScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [location, setLocation] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const isReservationValid = () => {
    return date !== '' && time !== '' && location !== '';
  };

  const handleReservationConfirmation = () => {
    if (isReservationValid()) {
      // Aquí podrías realizar acciones como enviar la reserva a una API o hacer algo con la información recolectada
      console.log('Reserva confirmada:', { date, time, location });
      // También podrías navegar a otra pantalla o realizar otra acción después de confirmar la reserva
    } else {
      alert('Por favor, completa la fecha, la hora y la ubicación para confirmar la reserva.');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="ios-calendar" size={100} color="black" />
      <Text style={styles.text}>Reserve Parking</Text>

      <View style={styles.inputContainer}>
        <Button title="Select Date" onPress={showDatepicker} />
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={styles.inputContainer}>
        <Button title="Select Time" onPress={showTimepicker} />
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <Button
        title="Confirm Reservation"
        onPress={handleReservationConfirmation}
        disabled={!isReservationValid()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default ReservedParkingScreen;
