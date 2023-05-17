import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <image style={styles.pizzaImage}
            souerce= {{
              uri: "http://bit.ly/book-pizza",
            }}/>
      <Text style={styles.baseText}>Pizzeria</Text>
      <text style={styles.newText}>Todas las pizzas</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText: {
    color: "red",
  },
  pizzaImage: {
    width: 200,
    height: 200,
  },
});
