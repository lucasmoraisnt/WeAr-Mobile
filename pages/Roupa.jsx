import React from "react";
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';
import styles from "./StyleRoupa";
import Button from "../components/Button";
import Dados from "../components/Dados";
import Cor from "../components/Cor";
import Tamanho from "../components/Tamanho";

import camisa from '../assets/camisa.png';

const Roupa = () => {
  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.container}>

        <Image
          style={styles.camisa}
          source={camisa}
        />

        <View>
          <View style={styles.headerDados}>
            <Text style={styles.camisaTexto}>Camisa Básica</Text>

            <Button place={"Provador Virtual"} style={styles.botaoProvador}/>
          </View>

          <View style={styles.infosProdutos}>

            <Dados cod={"3829012"} preco={"49,80"} />

            <Cor />

            <Tamanho />

            <Button place={"Comprar"} style={styles.botaoCompra}/>

          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

export default Roupa;