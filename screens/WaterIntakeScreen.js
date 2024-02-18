
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WaterIntakeScreen = () => {
  const [WaterIntake, setWaterIntake] = useState('');
  const [WaterGoal, setWaterGoal] = useState('');


  const handleSave = () => {
    const remainingWaters = parseInt(WaterGoal) - parseInt(WaterIntake);
    console.log('Water intake saved:', WaterIntake);
    console.log('Remaining Water goal:', remainingWaters);
    setWaterGoal(remainingWaters.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Intake Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Water goal per day in mL"
        value={WaterGoal}
        onChangeText={setWaterGoal}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter current Water intake in kcal"
        onChangeText={setWaterIntake}
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

export default WaterIntakeScreen;
