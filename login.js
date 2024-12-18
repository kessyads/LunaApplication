import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://dependable-inspiration-production2.up.railway.app/api/user';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    if (!validarEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }
    if (!senha) {
      Alert.alert('Erro', 'Por favor, insira sua senha.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email: email.toLowerCase(),
        senha,
      });

      if (response.status === 200) {
        const { nickname, avatar } = response.data;

        await AsyncStorage.setItem('nickname', nickname);
        await AsyncStorage.setItem('avatar', avatar);

        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('DashboardCiclo');
      }
    } catch (error) {
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/lunalogo.png')} style={styles.icon} />
      <Text style={styles.title}>Seja bem-vinda de volta!</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Digite seu e-mail..."
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        placeholder="Digite sua senha..."
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.linkContainer}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F7FC',
    paddingHorizontal: 20,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3AA6B9',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#3AA6B9',
    marginBottom: 5,
    marginLeft: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#7a7a7a',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0000005C',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#3AA6B9',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
