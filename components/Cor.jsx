import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cor = () => {
    return (
        <View style={styles.container}>
            <Text>Cor: Preto</Text>
            <View style={styles.cores}>
                <View style={styles.circulo1}/>
                <View style={styles.circulo2}/>
                <View style={styles.circulo3}/>
            </View>
        </View>
    )
}

export default Cor;

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    cores:{
        flexDirection: 'row',
        paddingVertical: 10,
        gap: 8
    },
    circulo1: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(153,152,152)',
        borderRadius: 30,
        backgroundColor: "#000"
    },
    circulo2: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(153,152,152)',
        borderRadius: 30,
        backgroundColor: "#fff"
    },
    circulo3: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(153,152,152)',
        borderRadius: 30,
        backgroundColor: "#194c30"
    }
})