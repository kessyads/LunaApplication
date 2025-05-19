import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      const response = await fetch('http://localhost:5003/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erro ao fazer login.');
      }

      const data = await response.json();

      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('userId', data.userId);

      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('DashboardCiclo'); // redireciona após login

    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  const handleLoginGmail = () => {
    Alert.alert('Login', 'Login com Google!');
  };

  const handleLoginTelefone = () => {
    Alert.alert('Login', 'Login com Número de Telefone!');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/lunalogo.png')} style={styles.icon} />
      <Text style={styles.title}>Seja bem-vinda de volta!</Text>

      <TextInput
        placeholder="Digite seu e-mail..."
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Digite sua senha..."
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity onPress={handleLoginGmail} style={styles.socialButton}>
          <Image
            source={require('./assets/googleicon.webp')} 
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleLoginTelefone} style={styles.socialButton}>
          <Image
            source={require('./assets/phoneicon.png')} 
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

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
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
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
  socialLoginContainer: {
    width: '30%',
    marginTop: 20,
    flexDirection: 'row',  
    justifyContent: 'space-between',  
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '48%',  
  },
  socialIcon: {
    width: 25,  
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,    
  },
  socialText: {
    fontSize: 16,
    color: '#3AA6B9',
    fontWeight: 'bold',
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
