import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {

    }, 
    itemContainer: {
       margin: 10,
       padding: 10,
       borderRadius: 8 ,
       backgroundColor: '#FF6348',
    },
    itemText: {
        fontSize: 16,
        color: 'white',
        flex: 9
    },
    checkboxContainer: {
       alignSelf: 'flex-end',
       flex: 1,
    },
    checkbox: {
        width: 50,
        height: 50
    }
})