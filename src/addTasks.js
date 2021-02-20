import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

const AddTask = () => {
    const [items, setItems] = useState()

    return (
        <View style={styles.container}>
            <TextInput placeholder="Write the task here"
            style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}> Add Task </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 8,
        height: 60,
        fontSize: 16
    },
    container: {
        marginBottom: 40
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 10,
        margin: 5
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})


export default AddTask;