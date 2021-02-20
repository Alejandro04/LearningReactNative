import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native'

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.tasks}>{title}</Text>
    </View>
);

const Tasks = () => {
    const [items, setItems] = useState()
    let data = [
        { id: 1, title: 'Tasks 1' },
        { id: 2, title: 'Tasks 2' },
        { id: 3, title: 'Tasks 3' },
        { id: 4, title: 'Tasks 4' },
    ]

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    useEffect(() => {
         setItems(data)
    }, []);

    return (
        <View style={styles.header}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: 'gray'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'left'
    },
    tasks: {
        textAlign: 'center',
        fontSize: 20
    },
    item: {
        backgroundColor: 'lavender',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 100,
    },
    title: {
        fontSize: 20,
    },
})


export default Tasks;