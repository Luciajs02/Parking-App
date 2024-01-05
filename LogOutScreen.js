import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

const LogOutScreen = ({ navigation }) => {

  const handleLogout = async () => {
    const auth = getAuth(); 

    try {
      await signOut(auth); 
      Alert.alert('Log out', 'You have been logged out successfully.', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Welcome'); 
          },
        },
      ]);
    } catch (error) {
      console.error('Error while logging out:', error);
      Alert.alert('Log out Error', 'There was an error logging out. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log out</Text>
      <Text style={styles.description}>Are you sure you want to logout?</Text>

      <Button title="Log out" onPress={handleLogout} />
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
