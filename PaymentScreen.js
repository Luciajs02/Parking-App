import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

const PaymentSettingsScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');


  const handleSaveChanges = () => {
    if (cardNumber && cardHolder && expiryDate && securityCode) {
      Alert.alert('Changes Saved', 'The changes have been successfully saved.');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="1234 5678 9012 3456"
      />
      <Input
        label="Card Holder"
        value={cardHolder}
        onChangeText={setCardHolder}
        placeholder="Name Surname"
      />
      <Input
        label="Expiry Date"
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YY"
      />
      <Input
        label="Security Code"
        value={securityCode}
        onChangeText={setSecurityCode}
        placeholder="CVC"
        secureTextEntry
      />

      <Button
        title="Save Changes"
        onPress={handleSaveChanges}
        buttonStyle={styles.saveButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  saveButton: {
    marginTop: 20,
    width: '100%',
    borderRadius: 80,
  },
});

export default PaymentSettingsScreen;
