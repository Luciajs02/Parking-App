import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsScreen from './SettingsScreen';

const defaultAvatar = require('../../assets/iconoPerfil.png');

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [avatarSource, setAvatarSource] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    password: '',
    email: '',
  });

  const validateFields = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!password) {
      newErrors.password = 'Please enter your password';
      valid = false;
    } else {
      newErrors.password = '';
    }

    if (!email) {
      newErrors.email = 'Please enter your email';
      valid = false;
    } else {
      newErrors.email = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const selectProfilePicture = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setAvatarSource(response.uri);
      }
    });
  };

  const handleSaveChanges = () => {
    if (validateFields()) {
      console.log(`Email: ${email}, Password: ${password}`);
      // Add logic to save changes to the user profile
      navigation.goBack(SettingsScreen); 
    } else {
      Alert.alert('Error', 'Please fill in all the required fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={avatarSource ? { uri: avatarSource } : defaultAvatar} style={styles.avatar} />
      <TouchableOpacity onPress={selectProfilePicture}>
        <Text style={styles.changePhoto}>Change Profile Photo</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.error}>{errors.email}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Change password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>{errors.password}</Text>
      </View>
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 1,  
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  changePhoto: {
    color: 'blue',
    marginBottom: 16,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
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
});

export default EditProfileScreen;
