import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    TextInput,
} from 'react-native'
import styles from './WrapTextInputStyle'
import Utils from '../../Utils'

export default function WrapTextInput({placeholder}) {

    const [isValid, setValid] = useState(false);

    const actions = {
        onTextChange: (text) => {
            const valid = Utils.isValidEmail(text);
            setValid(valid);
        }
    }

    return (
        <View style = {styles.container}>
            <TextInput 
                style = {styles.input}
                placeholder = {placeholder}
                onChangeText = {actions.onTextChange}
            />
            <ValidText isValid = {isValid}/>
        </View>
    )
}

export function ValidText({isValid}) {
    return isValid ? 
        <Text 
            style = {[
                styles.text, 
                styles.valid
            ]}
        >Your text is valid</Text>
        :
        <Text style = {[
            styles.text, 
            styles.inValid
        ]}>Your email you enter wrong</Text>
}
