import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import OptimizedGoalList from './components/OptimizedGoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  return (
    <ImageBackground source={require('./assets/app_bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        <GoalList goals={courseGoals} />
        {/* Uncomment the next line to use OptimizedGoalList */}
        {/* <OptimizedGoalList goals={courseGoals} />*/} 
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});

