import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ place, style }) => {
    return (
        <View style={style}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.txtBotao}>{place}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    container:{
        marginTop: 10
    },
    botao: {
        width: 100,
        height: 40,
        borderRadius: 5,
        backgroundColor: "rgba(166,134,146,1)",
        justifyContent: "center"
    },
    txtBotao: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    }
})