import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    console.log('Do the payment with:', cardNumber, expiry, cvv);
    // Aquí podrías incluir la lógica para procesar el pago
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Card Information</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          maxLength={16}
        />
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="MM/YY"
            keyboardType="numeric"
            value={expiry}
            onChangeText={(text) => setExpiry(text)}
            maxLength={5}
          />
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={(text) => setCvv(text)}
            maxLength={3}
          />
        </View>
      </View>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc', 
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8, 
    fontSize: 16,
    color: '#333', 
  },
  smallInput: {
    width: '45%', 
    marginRight: '5%',
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PaymentScreen;
