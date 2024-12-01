import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';

const AtividadeFisica = ({ navigation }) => {
  const [intensidade, setIntensidade] = useState('');
  const [tiposTreino, setTiposTreino] = useState({
    Musculação: false,
    Crossfit: false,
    Aeróbico: false,
    "Corrida/Caminhada": false,
    Outro: false,
  });

  const handleSubmit = () => {
    if (!intensidade) {
      Alert.alert('Erro', 'Por favor, selecione a intensidade do treino.');
      return;
    }

    const selecionados = Object.keys(tiposTreino).filter((tipo) => tiposTreino[tipo]);
    if (selecionados.length === 0) {
      Alert.alert('Erro', 'Por favor, selecione pelo menos um tipo de treino.');
      return;
    }

    Alert.alert('Sucesso', `Intensidade: ${intensidade}\nTipos: ${selecionados.join(', ')}`);
    navigation.navigate('ConfiguracaoPerfil'); // Substitua com a tela seguinte
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Intensidade */}
      <Text style={styles.title}>
        Com qual intensidade que você normalmente pratica atividade física?
      </Text>
      <View style={styles.optionsContainer}>
        {['Leve', 'Moderado', 'Intenso'].map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={[
              styles.optionButton,
              intensidade === opcao && styles.optionButtonSelected,
            ]}
            onPress={() => setIntensidade(opcao)}
          >
            <Text
              style={[
                styles.optionText,
                intensidade === opcao && styles.optionTextSelected,
              ]}
            >
              {opcao}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tipos de treino */}
      <Text style={styles.title}>Qual tipo de treino você pratica?</Text>
      <Text style={styles.subtitle}>*Pode ser mais de um tipo.</Text>

      {Object.keys(tiposTreino).map((tipo) => (
        <View key={tipo} style={styles.checkboxContainer}>
          <Checkbox
            value={tiposTreino[tipo]}
            onValueChange={(newValue) => setTiposTreino({ ...tiposTreino, [tipo]: newValue })}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>{tipo}</Text>
        </View>
      ))}

      {/* Botão para continuar */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F6F7FC',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3AA6B9',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  optionButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#3AA6B9',
  },
  optionText: {
    color: '#7a7a7a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionTextSelected: {
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: '#3AA6B9',
  },
  button: {
    backgroundColor: '#3AA6B9',
    borderRadius: 5,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AtividadeFisica;
