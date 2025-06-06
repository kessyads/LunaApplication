import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const BASE_URL = 'http://localhost:5003'; 

const RecuperarSenha = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRedefinirSenha = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    }
    if (!novaSenha || !confirmarSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    if (novaSenha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/user/redefinir-senha`, {
        email,
        novaSenha,
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Senha redefinida com sucesso!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', 'Erro ao redefinir senha. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao redefinir senha. Tente novamente.');
      console.error('Erro ao redefinir senha:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.linkText}>Esqueceu sua senha?</Text>
      <Text style={styles.title}>
        Digite seu <Text style={styles.highlight}>email</Text> para redefinir sua senha:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Nova senha:</Text>
      <Text style={styles.instructions}>
        *Insira maiúsculas, caracteres especiais (*&%$) e números.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua nova senha..."
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
      />

      <Text style={styles.label}>Confirmar:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua nova senha..."
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRedefinirSenha}>
        <Text style={styles.buttonText}>Redefinir Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F7FC',
    paddingHorizontal: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#3AA6B9',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#3AA6B9',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#3AA6B9',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  instructions: {
    fontSize: 12,
    color: '#7a7a7a',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#7a7a7a',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RecuperarSenha;
