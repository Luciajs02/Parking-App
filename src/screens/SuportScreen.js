import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const HelpAndSupportScreen = () => {
    
  const handleContactSupport = () => {
    // Add logic to navigate to a contact support screen or open an email intent
    // For simplicity, we'll open a link to a support email
    Linking.openURL('mailto:support@example.com');
  };

  const handleFAQ = () => {
    // Add logic to navigate to a frequently asked questions (FAQ) screen
    // For simplicity, we'll open a link to a sample FAQ page
    Linking.openURL('https://example.com/faq');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Help and Support</Text>

      <TouchableOpacity style={styles.button} onPress={handleContactSupport}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFAQ}>
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HelpAndSupportScreen;
