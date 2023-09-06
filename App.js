import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./Styles";
import Button from "./components/Button";
import Dados from "./components/Dados";
import Cor from "./components/Cor";
import Tamanho from "./components/Tamanho";

import vr from './assets/vr.png';
import hamburguer from './assets/cardapio.png';
import camisa from './assets/camisa.png';

const App = () => {
  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={vr}
          />
          <Image
            style={styles.menu}
            source={hamburguer}
          />
        </View>

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

export default App;