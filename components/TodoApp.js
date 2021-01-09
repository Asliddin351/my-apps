import React, {useState} from 'react'
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput } from 'react-native'
import Todo from './Todo'
const TodoApp = ({navigation}) => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const addTodos = () => {
        setTodos([input, ...todos]);
        setInput('');
    }
    
    return (
        <SafeAreaView style={todoStyles.container}>
            <View>
                <Text style={todoStyles.title}>Todo App!</Text>
            </View>
            <TextInput 
                style={todoStyles.inputText}
                value={input}
                onChangeText={text => setInput(text)}
                placeholder="todo"
             />
            <Button onPress={addTodos} title="Add"/>
            <Button title="Go back" onPress={() => navigation.goBack()} />

            <View style={todoStyles.todoList}>
                {todos.map(todo => (
                    <Todo title={todo}/>
                ))}
            </View>
        </SafeAreaView>

        
    )
}

const todoStyles = StyleSheet.create({
    container: {
       marginHorizontal: 30,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        textAlign: "center",
        color: 'deepskyblue',
        fontWeight: '700'

    },
    inputText: {
        padding: 5,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'lightblue',
        border: 'none'
    },
    todoButton: {
        border: 'none',
    },
    todoList: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column-reverse',

    }


});

export default TodoApp