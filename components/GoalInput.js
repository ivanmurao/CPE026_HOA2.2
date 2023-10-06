import { View, TextInput, Button, StyleSheet } from 'react-native'; 
import React, { useState } from 'react';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return(
        <View style={styles2.inputContainer}>
          <TextInput style={styles2.inputText} placeholder=' Your Course Goal' 
          onChangeText={goalInputHandler} value={enteredGoalText}/>
          <Button title='Add Goal' color='#CBBAB0'
          onPress={addGoalHandler}/>
        </View>
    );
};

const styles2 = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 5,
        borderColor: '#9C949C',
    },
    inputText: {
        borderWidth: 2,
        borderColor: '#333',
        backgroundColor: '#CBBAB0',
        padding: 10,
        borderRadius: 20,
        marginRight: 12,
        fontSize: 16,
    }
});


