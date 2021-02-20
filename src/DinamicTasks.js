import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  const [items, setItems] = useState()
  let data = [
    { id: 1, title: 'Tasks 1' },
    { id: 2, title: 'Tasks 2' },
    { id: 3, title: 'Tasks 3' },
    { id: 4, title: 'Tasks 4' },
  ]

  const Item = ({ title }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <View style={styles.item}>
        <Text style={styles.tasks}>{title}</Text>
        <Icon name="remove" size={20} color="firebrick"/>
      </View>
    </TouchableOpacity>
  );
  
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  useEffect(() => {
    setItems(data)
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 40
  },
  button: {
    alignItems: "center",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  tasks: {
    textAlign: 'center',
    fontSize: 20
  },
  item: {
    backgroundColor: 'lavender',
    padding: 10,
    borderRadius: 100,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default App;