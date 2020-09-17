import {StyleSheet} from 'react-native'
import layouts from '../../layout'

export default StyleSheet.create({
    container: {
        height: 60,
        borderRadius: 10,
        ...layouts.rowCenter
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})