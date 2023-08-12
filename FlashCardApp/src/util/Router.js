import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from "../screens/TelaLogin";
import TelaCadastro from '../screens/TelaCadastro';
import TelaInicial from '../screens/TelaInicial';
import EditarColecao from '../screens/EditarColecao';
import EditarFlashCard from '../screens/EditarFlashCard';
import TelaJogar from '../screens/TelaJogar';
import CadastrarFlashCard from '../screens/CadastrarFlashCard';
import CadastrarColecao from '../screens/CadastrarColecao';

const Stack = createStackNavigator();

function Telas() {
  return (
      <Stack.Navigator>
        <Stack.Screen name='TelaLogin' component={TelaLogin} options={{headerShown: false}}/>
        <Stack.Screen name='TelaCadastro' component={TelaCadastro} options={{headerShown: false}}/>
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{headerShown: false}}/>
        <Stack.Screen name='EditarColecao' component={EditarColecao} options={{headerShown: false}}/>
        <Stack.Screen name='EditarFlashCard' component={EditarFlashCard} options={{headerShown: false}}/>
        <Stack.Screen name='TelaJogar' component={TelaJogar} options={{headerShown: false}}/>
        <Stack.Screen name ='CadastrarColecao' component={CadastrarColecao} options={{headerShown: false}}/>
        <Stack.Screen name ='CadastrarFlashCard' component={CadastrarFlashCard} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function App() {
  return(
    <NavigationContainer>
      <Telas />
    </NavigationContainer>
  );
}

export default App;