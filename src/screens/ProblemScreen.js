import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ReportAProblemScreen = () => {
  const [problemDescription, setProblemDescription] = useState('');

  const handleReportProblem = () => {
    if (problemDescription.trim() === '') {
      Alert.alert('Error', 'Please provide a description of the problem.');
    } else {
      // Add logic to send the problem report
      // For simplicity, we'll just log the description for now
      console.log('Problem Description:', problemDescription);
      Alert.alert('Report Submitted', 'Thank you for reporting the problem.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Report a Problem</Text>

      <Text style={styles.label}>Describe the problem:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Type your description here"
        value={problemDescription}
        onChangeText={(text) => setProblemDescription(text)}
      />

      <Button title="Submit Report" onPress={handleReportProblem} />
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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default ReportAProblemScreen;
