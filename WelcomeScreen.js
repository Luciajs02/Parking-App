import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, 
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo_nofondo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Brno-INN</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Log In')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A4EAB',
  },
  title: {
    fontSize: 28,
    marginBottom: 60,
    color: '#fff',
    fontFamily: 'Arial',
  },
  logo: {
    width: 90,
    height: 120,
    marginBottom: 50,
    borderRadius: 15,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
