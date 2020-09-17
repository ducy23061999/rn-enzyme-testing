import {StyleSheet} from 'react-native'
import layout from '../../layout'

export default StyleSheet.create({
    container: {
        ...layout.columnSketchCenter
    },
    input: {
        width: '100%',
        borderColor: '#b3b5b4',
        borderWidth: 2,
        borderRadius: 5
    },
    text: {
        alignSelf: 'flex-start',
        marginTop: 10,
        fontSize: 17
    },
    valid: {
        color: 'green'
    },
    inValid: {
        color: 'red'
    }
})