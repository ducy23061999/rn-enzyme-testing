import React, { Component } from 'react';
import {
    View, 
    TouchableOpacity,
    Text,
    Linking
} from 'react-native'
import styles from './ButtonStyle'

export default function Button({onPress, text, url}) {
    const activeColor = onPress ? '#3432a8' : '#989d9e';

    const action = {
        onPressHandle: () => {
            if (url) {
                Linking.openURL(url);
                return;
            }
            onPress();
        }
    }

    return (
        <TouchableOpacity 
            style = {[
                styles.container,
                {backgroundColor: activeColor}
            ]}
            onPress = {action.onPressHandle}
        >
            <Text style = {styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
