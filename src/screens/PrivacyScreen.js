import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const PrivacyAccountScreen = () => {
  const [publicProfile, setPublicProfile] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  const togglePublicProfile = () => {
    setPublicProfile(!publicProfile);
  };

  const toggleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Privacy Settings</Text>

      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Public Profile</Text>
        <Switch
          value={publicProfile}
          onValueChange={togglePublicProfile}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Show Email on Profile</Text>
        <Switch
          value={showEmail}
          onValueChange={toggleShowEmail}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Privacy settings saved.')}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
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
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PrivacyAccountScreen;
