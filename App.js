import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Cadastro from './cadastro';
import Login from './login';
import InformacoesIniciais from './InformacoesIniciais';
import RecuperarSenha from './RecuperarSenha';
import UltimoCiclo from './UltimoCiclo';
import Regularidade from './Regularidade';
import MetodoContraceptivo from './MetodoContraceptivo';
import RotinaTreinos from './RotinaTreinos';
import AtividadeFisica from './AtividadeFisica';
import ConfiguracaoPerfil from './ConfiguracaoPerfil';
import TelaAguarde from './TelaAguarde';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="InformacoesIniciais" component={InformacoesIniciais} />
        <Stack.Screen name="UltimoCiclo" component={UltimoCiclo} />
        <Stack.Screen name="Regularidade" component={Regularidade}/>
        <Stack.Screen name="MetodoContraceptivo" component={MetodoContraceptivo}/>
        <Stack.Screen name="RotinaTreinos" component={RotinaTreinos}/>
        <Stack.Screen name="AtividadeFisica" component={AtividadeFisica}/>
        <Stack.Screen name="ConfiguracaoPerfil" component={ConfiguracaoPerfil}/>
        <Stack.Screen name="TelaAguarde" component={TelaAguarde}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}