import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";

class ListView extends Component {
    render() {
        const mytext = "Todas las pizzas";
        return (
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.pizzaImage}
                    source={{
                        uri: "https://bit.ly/book-pizza",
                    }}
                />
                <Text style={styles.baseText}>Pizzeria</Text>
                <text style={styles.newText}>{mytext}</text>
                <text style={styles.title}>Vista de lista</text>
                <Button title="Lista de items, clisck para detalles"/>
            </SafeAreaView>
        );
    }
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

export default ListView;
