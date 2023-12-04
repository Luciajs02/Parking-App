import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsAndPoliciesScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.sectionHeading}>1. Terms of Service</Text>
      <Text style={styles.paragraph}>
        By using our parking app, you agree to comply with our Terms of Service. This includes the terms related to searching, booking, and using parking spaces through the app.
      </Text>

      <Text style={styles.sectionHeading}>2. Privacy Policy</Text>
      <Text style={styles.paragraph}>
        Your privacy is crucial to us. Our Privacy Policy outlines how we collect, use, and protect your personal information when you use our parking app.
      </Text>

      <Text style={styles.sectionHeading}>3. Cookie Policy</Text>
      <Text style={styles.paragraph}>
        We use cookies to enhance your experience. Our Cookie Policy explains how we use cookies and similar technologies to provide you with a personalized and secure parking app experience.
      </Text>

      <Text style={styles.sectionHeading}>4. Refund Policy</Text>
      <Text style={styles.paragraph}>
        Refund policies for parking reservations may vary by provider. Please review the specific parking provider's refund policy before confirming a reservation through our app.
      </Text>

    </ScrollView>
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
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TermsAndPoliciesScreen;
