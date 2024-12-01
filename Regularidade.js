import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const Regularidade = ({ navigation }) => {
  const handleResposta = (resposta) => {
    Alert.alert('Resposta selecionada', `Você respondeu: ${resposta}`);
    navigation.navigate('MetodoContraceptivo'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sua menstruação é regular?</Text>
      <Text style={styles.description}>
        A maioria das mulheres não possui uma menstruação regular, podendo haver variações no ciclo a cada mês.
      </Text>

      {/* Botões de Resposta */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleResposta('Sim')}
      >
        <Text style={styles.buttonText}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleResposta('Não')}
      >
        <Text style={styles.buttonText}>Não</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3AA6B9',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#E6E6E6',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#3AA6B9',
    fontWeight: 'bold',
  },
});

export default Regularidade;
