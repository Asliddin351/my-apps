import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const Todo = ({title}) => {
   

    return (
        <View>
            <Text style={TodoItem.item}>{title}</Text>
        </View>
    )
}

const TodoItem = StyleSheet.create({
    item: {
        height: 50,
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        
    }
});
export default Todo
