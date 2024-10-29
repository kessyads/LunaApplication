import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Ícones para o login

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    if (!validarEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }
    if (!senha) {
      Alert.alert('Erro', 'Por favor, insira sua senha.');
      return;
    }

    // Lógica para o login...
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/lunalogo.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Seja bem-vinda de volta!</Text>
      
      <Text style={styles.label}>email:</Text>
      <TextInput
        placeholder="Digite seu e-mail..."
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>senha:</Text>
      <TextInput
        placeholder="Digite sua senha..."
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity onPress={() => Alert.alert('Redirecionar para recuperação de senha...')}>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou</Text>

      <Text style={styles.loginWithText}>Entre com :</Text>
      
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
});

export default Login;
