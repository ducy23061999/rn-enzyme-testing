import React, {useEffect, useState} from 'react'
import {View, FlatList, Text, TouchableOpacity} from 'react-native'
import styles from './ToDoListStyle'
import layout from '../../layout'
import CheckBox from '@react-native-community/checkbox'
import _ from 'lodash'
import axios from 'axios'

export default function ({}) {

    const URL = "https://8000-a51b5ad7-0f0d-4c4d-aa72-b9249f88d170.ws-us02.gitpod.io/data"

    const [todos, setToDos] = useState([])
    useEffect(() => {
        axios.get(URL)
        .then(todos => {
            const todoList = JSON.parse(todos.data)
            setToDos(todoList)
        })
        .catch(e => setToDos([]));
    }, [])

    const actions = {
        onItemClick: (item) => {
           const newTodos = todos.map(todo => {
               return {
                    id: todo.id,
                    name: todo.name,
                    isCheck: todo.id == item.id ? !todo.isCheck : todo.isCheck
                }
           })

           setToDos(newTodos);
        }

    }

    return (
        <View>
            <FlatList 
                data = {todos}
                keyExtractor = {item => item.id}
                renderItem = {({item}) => (<ListItem item = {item} onPressItem = {actions.onItemClick}/>) }
            />
        </View>
    )
}

export const ListItem = ({item, onPressItem}) => {
    return (
        <TouchableOpacity 
            style = {[layout.rowStart, styles.itemContainer]}
            onPress = {() => onPressItem(item)}
        >
            <Text style = {styles.itemText}>{item.name}</Text>
            <View style = {styles.checkboxContainer}>
                <CheckBox style = {styles.checkbox}
                    value = {item.isCheck}
                />
            </View>
        </TouchableOpacity>
    )
}