import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MySubscriptionScreen = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState('Active');
  const [subscriptionType, setSubscriptionType] = useState('Premium');

  const handleCancelSubscription = () => {
    // Add logic to cancel the subscription
    setSubscriptionStatus('Cancelled');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Subscription</Text>

      <View style={styles.subscriptionInfo}>
        <Text style={styles.label}>Subscription Status:</Text>
        <Text style={styles.value}>{subscriptionStatus}</Text>
      </View>

      <View style={styles.subscriptionInfo}>
        <Text style={styles.label}>Subscription Type:</Text>
        <Text style={styles.value}>{subscriptionType}</Text>
      </View>

      {subscriptionStatus === 'Active' && (
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelSubscription}>
          <Text style={styles.cancelButtonText}>Cancel Subscription</Text>
        </TouchableOpacity>
      )}
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
  subscriptionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MySubscriptionScreen;
