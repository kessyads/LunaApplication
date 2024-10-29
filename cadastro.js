import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  const validarEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validarSenha = (senha) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
    return re.test(senha);
  };

  const handleCadastro = () => {
    if (!nome) {
      Alert.alert('Erro', 'Por favor, insira seu nome.');
      return;
    }
    if (!validarEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }
    if (!validarSenha(senha)) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres, com pelo menos uma letra e um número.');
      return;
    }
    if (!termosAceitos) {
      Alert.alert('Erro', 'Você deve aceitar os termos de uso.');
      return;
    }

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    
    navigation.navigate('InformacoesIniciais');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/lunalogo.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>Cadastre-se</Text>
      <TextInput
        placeholder="Digite seu nome..."
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Digite seu e-mail..."
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Crie uma senha..."
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Termos de Uso */}
      <TouchableOpacity onPress={() => setTermosAceitos(!termosAceitos)} style={styles.termosContainer}>
        <Text style={[styles.termosText, termosAceitos && styles.termosTextAceito]}>
          {termosAceitos ? '✔️ Aceitei os termos de uso' : 'Li e concordo com os termos de uso'}
        </Text>
      </TouchableOpacity>

      {/* Link para Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkContainer}>
        <Text style={styles.linkText}>Já tem uma conta? Clique aqui</Text>
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
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3AA6B9',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#0000005C', 
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 18,
  },
  termosContainer: {
    marginVertical: 20,
  },
  termosText: {
    textDecorationLine: 'underline',
    color: '#3AA6B9',
    textAlign: 'center',
  },
  termosTextAceito: {
    textDecorationLine: 'none',
    color: 'green',
  },
  linkContainer: {
    marginTop: 10,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#3AA6B9',
    textAlign: 'center',
  },
});

export default Cadastro; 
