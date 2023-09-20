import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Dados = ({ cod, preco }) => {
    return (
        <View>
            <Text style={styles.cod}>Código: {cod}</Text>
            <Text style={styles.preco}>R$ {preco}</Text>
        </View>
    )
}

export default Dados;

const styles = StyleSheet.create({
    cod: {
        color: "rgb(115,114,114)",
        fontSize: 10,
        lineHeight: 10,
        paddingVertical: "3%",
        marginLeft: 15
    },
    preco: {
        marginLeft: 15,
        color: "#000",
        fontSize: 26,
        lineHeight: 28,
        fontWeight: "400",
    }
})