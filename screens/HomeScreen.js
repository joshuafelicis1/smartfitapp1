import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water & Calorie Tracker</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Track Water Intake"
          onPress={() => navigation.navigate('WaterIntake')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Track Calorie Intake"
          onPress={() => navigation.navigate('CalorieIntake')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
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
  buttonContainer: {
    marginVertical: 10,
    width: '70%',
  },
});

export default HomeScreen;