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
        color: "rgba(115,114,114,1)",
        fontSize: 10,
        lineHeight: 10,
        fontFamily: "Inter, sans-serif",
        paddingVertical: "3%",
        marginLeft: 15
    },
    preco: {
        marginLeft: 15,
        color: "rgba(0,0,0,1)",
        fontSize: "26px",
        lineHeight: "28px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
    }
})