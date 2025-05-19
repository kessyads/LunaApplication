import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';

const LGPDScreen = ({ navigation }) => {

  const handleAgree = () => {
    Alert.alert('Termos Aceitos', 'Você aceitou os Termos de Uso!');
    navigation.navigate('ConfiguracaoPerfil');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vamos falar sobre Termos de Uso</Text>
      <Text style={styles.subtitle}>
        Ao utilizar o nosso aplicativo, você concorda com os Termos de Uso descritos abaixo.
      </Text>

      <Text style={styles.text}>
        1. Utilizar o aplicativo apenas para os fins permitidos por estes Termos de Uso.
      </Text>
      <Text style={styles.text}>
        2. Não utilizar o aplicativo de forma que possa prejudicar ou sobrecarregar os sistemas ou a infraestrutura do Luna.
      </Text>
      <Text style={styles.text}>
        3. Fornecer informações verdadeiras, precisas e completas ao se registrar no aplicativo.
      </Text>

      {/* Botão para concordar com os termos */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleAgree}
      >
        <Text style={styles.buttonText}>
          Ao seguir estou aceitando os termos de uso e as normas LGPD
        </Text>
      </TouchableOpacity>
    </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3AA6B9',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#3AA6B9',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#3AA6B9',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3AA6B9',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LGPDScreen;
