import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Cadastro from './cadastro';
import LGPDScreen from './LGPDScreen';
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
import DashboardCiclo from './DashboardCiclo';
import TreinoRecomendado from './TreinoRecomendado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'Recuperar Senha' }} />
        <Stack.Screen name="LGPDScreen" component={LGPDScreen} />
        <Stack.Screen name="InformacoesIniciais" component={InformacoesIniciais} options={{ title: 'Informações Iniciais' }} />
        <Stack.Screen name="UltimoCiclo" component={UltimoCiclo} options={{ title: 'Último Ciclo' }} />
        <Stack.Screen name="Regularidade" component={Regularidade} options={{ title: 'Regularidade' }} />
        <Stack.Screen name="MetodoContraceptivo" component={MetodoContraceptivo} options={{ title: 'Método Contraceptivo' }} />
        <Stack.Screen name="RotinaTreinos" component={RotinaTreinos} options={{ title: 'Rotina de Treinos' }} />
        <Stack.Screen name="AtividadeFisica" component={AtividadeFisica} options={{ title: 'Atividade Física' }} />
        <Stack.Screen name="ConfiguracaoPerfil" component={ConfiguracaoPerfil} options={{ title: 'Configuração de Perfil' }} />
        <Stack.Screen name="TelaAguarde" component={TelaAguarde} options={{ title: 'Aguarde' }} />
        <Stack.Screen name="DashboardCiclo" component={DashboardCiclo} options={{ title: 'Seu Ciclo' }} />
        <Stack.Screen name="TreinoRecomendado" component={TreinoRecomendado} options={{ title: 'Treino Recomendado' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
