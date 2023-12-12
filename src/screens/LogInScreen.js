import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import { firebaseConfig } from '../db/firebase-config'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const defaultAvatar = require('../../assets/iconoPerfil.png');

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginScreen = () => {
  
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleCreateAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert('Account created!');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message)
      });
  };
  
  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert('Signed in!');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Map');
      })
      .catch((error) => {
        Alert.alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={defaultAvatar} style={styles.avatar} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Enter your email"
          value={email}
        />
        <Text style={styles.error}>{errors.email}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            value={password}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="black" />
          </TouchableOpacity>          
        </View>
        
        <Text style={styles.error}>{errors.password}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => handleSignIn(email, password)}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleCreateAccount(email, password)}>
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 17,
  },
  label: {
    marginBottom: 8,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  error: {
    color: 'red',
    marginTop: 2,
  },
  buttonText: {
    color: 'blue',
    fontSize: 17,
    marginBottom: 11,

  }
});

export default LoginScreen;