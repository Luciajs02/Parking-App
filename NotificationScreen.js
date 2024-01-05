import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';


const NotificationsScreen = () => {
  
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(false);

  const togglePushNotifications = () => {
    setPushNotificationsEnabled(!pushNotificationsEnabled);
  };

  const toggleEmailNotifications = () => {
    setEmailNotificationsEnabled(!emailNotificationsEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Enable Push Notifications</Text>
        <Switch
          value={pushNotificationsEnabled}
          onValueChange={togglePushNotifications}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Enable Email Notifications</Text>
        <Switch
          value={emailNotificationsEnabled}
          onValueChange={toggleEmailNotifications}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => Alert.alert('Notification settings saved.')}>
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

export default NotificationsScreen;
