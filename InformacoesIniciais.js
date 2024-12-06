import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InformacoesIniciais = ({ navigation }) => {
  const [dataNascimento, setDataNascimento] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set' && selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]; 
      setDataNascimento(formattedDate);
    }
    setShowDatePicker(false);
  };

  const handleAvancar = async () => {
    if (!dataNascimento || !peso || !altura) {
      Alert.alert('Erro', 'Por favor, preencha todas as informações.');
      return;
    }

    try {
      const userId = await AsyncStorage.getItem('userId');
      await axios.post('dependable-inspiration-production2.up.railway.app', {
        userId,
        ciclo: 'menstrual', 
        peso,
        altura,
        dataNascimento,
      });

      Alert.alert('Sucesso', 'Informações salvas com sucesso!');
      navigation.navigate('UltimoCiclo');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar informações de saúde. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/ciclito.png')} style={styles.icon} />
      <Text style={styles.title}>Olá, eu sou o Ciclito!</Text>
      <Text style={styles.subtitle}>
        Para começarmos, preciso saber algumas informações sobre você:
      </Text>

      {/* Campo de Data de Nascimento */}
      <Text style={styles.label}>Qual sua data de nascimento?</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
        <Text style={styles.dateText}>{dataNascimento || 'Selecione uma data'}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={tempDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={handleDateChange}
          maximumDate={new Date()}
        />
      )}

      {/* Campo de Peso */}
      <Text style={styles.label}>Qual seu peso atual?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ex: 60"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        <Text style={styles.unit}>kg</Text>
      </View>

      {/* Campo de Altura */}
      <Text style={styles.label}>Qual sua altura?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ex: 165"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <Text style={styles.unit}>cm</Text>
      </View>

      {/* Botão Avançar */}
      <TouchableOpacity style={styles.button} onPress={handleAvancar}>
        <Text style={styles.buttonText}>Avançar</Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#3AA6B9',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#3AA6B9',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  dateInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  dateText: {
    color: '#7a7a7a',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  unit: {
    fontSize: 16,
    color: '#3AA6B9',
    marginLeft: 10,
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
  },
});

export default InformacoesIniciais;
