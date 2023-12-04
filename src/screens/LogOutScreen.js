import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const LogOutScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Add logic to perform logout actions (clear user session, navigate to login screen, etc.)
    // For simplicity, we'll just show an alert
    Alert.alert('Logout', 'You have been logged out successfully.', [
      {
        text: 'OK',
        onPress: () => {
          // Navigate to the login screen or the initial screen of your app
          navigation.navigate('Login');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Logout</Text>
      <Text style={styles.description}>Are you sure you want to logout?</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default LogOutScreen;
