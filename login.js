import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Valida o formato do email
  const validarEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Lida com o login
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
      const response = await fetch('http://192.168.15.3:5001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('Sucesso', `Bem-vinda, ${data.nickname}!`);
        navigation.navigate('InformacoesIniciais'); // Redireciona para Informações Iniciais
      } else {
        const error = await response.json();
        Alert.alert('Erro', error.message || 'Credenciais inválidas.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/lunalogo.png')}
        style={styles.icon}
      />
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

      <Text style={styles.orText}>ou</Text>

      <Text style={styles.loginWithText}>Entre com:</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="email" size={32} color="#7a7a7a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="phone" size={32} color="#7a7a7a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="google" size={32} color="#7a7a7a" />
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
  orText: {
    fontSize: 16,
    color: '#7a7a7a',
    marginVertical: 10,
  },
  loginWithText: {
    fontSize: 16,
    color: '#3AA6B9',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  iconButton: {
    padding: 10,
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
