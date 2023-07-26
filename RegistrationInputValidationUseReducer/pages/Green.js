import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useReducer } from 'react';
import { UserContext } from '../context/userContext';

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'updatePhone':
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};

export default function Green({ setContent }) {
  const userContext = useContext(UserContext);

  const [state, dispatch] = useReducer(reducer, {
    phone: '',
  });

  const handleNext = () => {
    // Set the phone number using the reducer state
    userContext.updatePhoneNumber(state.phone);

    // Change the content to main
    setContent('main');
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Using Reducer</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.text}>Verify your phone.</Text>
      <TextInput
        style={styles.inputText}
        placeholder='801-555-5555'
        onChangeText={(text) => dispatch({ type: 'updatePhone', payload: text })}
      ></TextInput>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'green',
        fontSize: 30,
        fontWeight: 700,
        marginTop: 30
    },
    background: {
        height: '100%',
        backgroundColor: 'lightgreen',
        display: 'flex',
    },
    inputText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30
    },
    nextButton: {
        alignSelf: 'center',
        width: 50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginTop: 15
    },
    nextText: {
        color: 'white'
    }
})