import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Alert } from 'react-native';

const HelpAndSupportScreen = () => {
  const supportEmail = '262119@vut.cz'; 

  const handleContactSupport = () => {
    let mailtoUrl = `mailto:${supportEmail}`;

    if (Platform.OS === 'ios') {
      mailtoUrl += '&subject=Subject&body=Body';
    } else if (Platform.OS === 'android') {
      mailtoUrl += '?subject=Subject&body=Body';
    }

    openMailApp(mailtoUrl);
  };

  const openMailApp = (url) => {
    if (Platform.OS === 'ios') {
      const gmailWebUrl = 'https://mail.google.com/';
      Linking.openURL(gmailWebUrl)
        .then(() => console.log('Opened Gmail in Safari'))
        .catch((err) => console.error('Failed to open Gmail:', err));
    } else {
      Alert.alert('Not supported on this platform');
    }
  };

  return (
    <View style={styles.container}>
      <Text> Please write your issue here: </Text>

      <TouchableOpacity style={styles.button} onPress={handleContactSupport}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
