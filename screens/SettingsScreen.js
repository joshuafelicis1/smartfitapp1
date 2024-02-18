
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [name, setName] = useState ('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);


  const calculateBMI = () => {
    if (!weight || !height) {
      setBMI(null);
      return;
    }
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters
    const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(2);
    setBMI(bmiValue);
  };

  const getBMICategory = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const handleSaveProfile = () => {
    // Handle saving profile information
    console.log('Profile information saved:', { name, weight, height });
  };

  return (
    <View style={styles.container}>
      
        
      <Text style={styles.title}>Profile Settings</Text>
      <TextInput
        style= {styles.input}
        placeholder = "Enter your Name"
        onChangeText = {setName}
        keyboardType = "numeric"
        onBlur = {setName}
        />

      <TextInput
        style={styles.input}
        placeholder="Enter weight in kg"
        onChangeText={setWeight}
        keyboardType="numeric"
        onBlur={calculateBMI}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Enter height in cm"
        onChangeText={setHeight}
        keyboardType="numeric"
        onBlur={calculateBMI}
      />
      {bmi !== null && <Text style={styles.bmiText}>BMI: {bmi}</Text>}
      {bmi !== null && <Text style={styles.bmiCategoryText}>Category: {getBMICategory()}</Text>}
      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bmiText: {
    fontSize: 20,
    marginBottom: 10,
  },
  bmiCategoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;
