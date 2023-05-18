import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

class DetailView extends Component {
    render() {
        return (
            <view style={styles.center}>
                <text style={styles.title}>Vista de detalles</text>
                <Button title="Vista de items, click para detalles"/>
            </view>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
    },
});

export default DetailView;
