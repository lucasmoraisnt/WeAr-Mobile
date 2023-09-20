import React from "react";
import { View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import vr from './assets/vr.png';
import hamburguer from './assets/cardapio.png';
import styles from "./Styles";
import Roupa from "./pages/Roupa";
import Provador from "./pages/Provador";

const App = () => {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={styles.container}>

      <SafeAreaView>
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
      </SafeAreaView>

      <Tab.Navigator>
        <Tab.Screen name="Roupa" component={Roupa}/>
        <Tab.Screen name="Provador" component={Provador}/>
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App;