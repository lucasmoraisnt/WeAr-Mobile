import React from 'react';
import {StyleSheet, Image, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Provador() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
            <Image
              style={styles.menuHambuguer}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ptusbbilj4-6%3A61?alt=media&token=0230caa5-a70f-48d6-9f54-bd8aeb77092c'
              }}
            />
            <Image
              style={styles.oculosAR}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ptusbbilj4-6%3A59?alt=media&token=c795a623-41e6-4fb8-ad8c-db5c85e37b66'
              }}
            />
          </View>

          <View>
            <Text style={styles.h1}>PROVADOR VIRTUAL</Text>
          </View>
          
          <View style={styles.containerForm}>
            <View style={styles.form}>

                <View style={styles.label}>
                  <Text style={styles.info}>Busto:</Text>
                  <TextInput style={styles.input}/>
                  <Text style={styles.cm}>cm</Text>
                </View>

                <View style={styles.label}>
                  <Text style={styles.info}>Cintura:</Text>
                  <TextInput style={styles.input}/>
                  <Text style={styles.cm}>cm</Text>
                </View>

                <View style={styles.label}>
                  <Text style={styles.info}>Quadril:</Text>
                  <TextInput style={styles.input}/>
                  <Text style={styles.cm}>cm</Text>
                </View>

                <View style={styles.label}>
                  <Text style={styles.info}>Altura:</Text>
                  <TextInput style={styles.input}/>
                  <Text style={styles.cm}>cm</Text>
                </View>

            </View>

            <View style={styles.botoes}>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.txtBotao}>Voltar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.txtBotao}>Pronto!</Text>
              </TouchableOpacity>
            </View>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 10,
    backgroundColor: 'rgba(242,196,208,1)',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: "space-between",
  },
  menuHambuguer: {
    width: 50,
    height: 50,
  },
  oculosAR: {
    width: 67,
    height: '100%',
  },
  h1: {
    justifyContent: 'center',
    color: 'rgba(0,0,0,1)',
    fontSize: 35,
    paddingHorizontal: 25,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: "10%",
    marginBottom: "5%"
  },
  containerForm: {  
    marginHorizontal: 20,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: 'rgba(245,137,159,1)',
  },
  input:{
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "50%",
    paddingVertical: "2%"
  },  
  form: {
    flexDirection: 'column',
  },
  label:{
    paddingVertical: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    color: 'rgba(0,0,0,1)',
    fontSize: '25px',
    lineHeight: '25px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
  },
  cm: {
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(0,0,0,1)',
    fontSize: '25px',
    lineHeight: '25px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },

  botao:{
    backgroundColor: "rgba(166,134,146,1)",
    width: 97,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    paddingVertical: "1%",
    justifyContent: "center",
    textAlign: "center"
  },
  botoes:{
    marginVertical: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtBotao:{
    color: "#fff",
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    textAlign: "center"
  }
});
