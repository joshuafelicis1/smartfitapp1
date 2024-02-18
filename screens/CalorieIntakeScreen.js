
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalorieIntakeScreen = () => {
  const [calorieIntake, setCalorieIntake] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('2000');


  const handleSave = () => {
    const remainingCalories = parseInt(calorieGoal) - parseInt(calorieIntake);
    console.log('Calorie intake saved:', calorieIntake);
    console.log('Remaining calorie goal:', remainingCalories);
    setCalorieGoal(remainingCalories.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Intake Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter calorie goal per day"
        value={calorieGoal}
        onChangeText={setCalorieGoal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter current calorie intake in kcal"
        onChangeText={setCalorieIntake}
        keyboardType="numeric"
      />

      
      <Button title="Save" onPress={handleSave} />
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
});

export default CalorieIntakeScreen;
