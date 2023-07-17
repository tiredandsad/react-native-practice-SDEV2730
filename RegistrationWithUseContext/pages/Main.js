import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function Main({setContent}){


    return(
        <View style={styles.body}>
            <Text style={styles.header}>Registration</Text>
            <TouchableOpacity style={styles.blue} onPress={() => setContent('name')}>
                <Text style={styles.buttonText}>NAME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.green} onPress={() => setContent('phone')}>
                <Text style={styles.buttonText}>PHONE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.red} onPress={() => setContent('email')}>
                <Text style={styles.buttonText}>EMAIL</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        fontSize: 28,
        fontWeight: 700,
        color: 'white'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    blue: {
        marginTop: 20,
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    green: {
        marginTop: 20,
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    red: {
        marginTop: 20,
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }

});