import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tamanho = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Tamanho</Text>

            <View style={styles.opcoes}>

                <View style={styles.quadrado}>
                    <Text style={styles.opcao}>P</Text>
                </View>

                <View style={styles.quadrado}>
                    <Text style={styles.opcao}>M</Text>
                </View>

                <View style={styles.quadrado}>
                    <Text style={styles.opcao}>G</Text>
                </View>

            </View>
        </View>
    )
}

export default Tamanho;

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    titulo: {
        fontSize: 16,
        lineHeight: 20,
    },
    opcoes:{
        flexDirection: "row",
        gap: 10
    },
    quadrado:{
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#fff",
        marginLeft: 4
    }
})