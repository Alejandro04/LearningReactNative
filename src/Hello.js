import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Hello = (props) => {
    return (
        <View style={props.styleContainer}>
            <Text style={props.styleTitle}>HELLO WORLD</Text>
            <View style={styles.viewContainer}>
                <Image source={{ uri: 'https://randomuser.me/portraits/men/10.jpg' }}
                    style={styles.img} />
            </View>
            <View style={styles.viewContainer}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 40,
        marginBottom: 40
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    }
})


export default Hello;