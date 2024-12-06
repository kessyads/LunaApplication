import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Switch } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://dependable-inspiration-production2.up.railway.app'; // SUBSTITUIR PELA SUA URL DO BACKEND

const UltimoCiclo = ({ navigation }) => {
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [naoLembro, setNaoLembro] = useState(false);

  const hoje = new Date().toISOString().split('T')[0];

  const handleValidar = async () => {
    if (!dataSelecionada && !naoLembro) {
      Alert.alert('Erro', 'Por favor, selecione uma data ou marque a opção "Não me lembro".');
      return;
    }

    try {
      const userId = await AsyncStorage.getItem('userId');
      await axios.post(`${BASE_URL}/health/update`, {
        userId,
        ciclo: 'menstrual',
        ultimoCiclo: dataSelecionada || 'Indeterminado',
      });

      Alert.alert('Sucesso', 'Informação do ciclo registrada!');
      navigation.navigate('Regularidade');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao registrar o último ciclo. Tente novamente.');
      console.error('Erro ao registrar o ciclo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quando foi a data de início do seu último ciclo?</Text>
      <Calendar
        onDayPress={(day) => {
          if (day.dateString > hoje) {
            Alert.alert('Erro', 'A data selecionada não pode ser no futuro.');
          } else {
            setDataSelecionada(day.dateString);
          }
        }}
        markedDates={{
          [dataSelecionada]: {
            marked: true,
            selected: true,
            selectedColor: '#3AA6B9',
          },
        }}
        theme={{
          arrowColor: '#3AA6B9',
          todayTextColor: '#3AA6B9',
        }}
        maxDate={hoje}
      />
      <View style={styles.checkboxContainer}>
        <Switch
          value={naoLembro}
          onValueChange={(newValue) => {
            setNaoLembro(newValue);
            if (newValue) setDataSelecionada(null);
          }}
          thumbColor={naoLembro ? '#3AA6B9' : '#ccc'}
          trackColor={{ false: '#ccc', true: '#a3dbe9' }}
        />
        <Text style={styles.checkboxText}>Não me lembro</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleValidar}>
        <Text style={styles.buttonText}>Validar</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3AA6B9',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxText: {
    fontSize: 16,
    color: '#3AA6B9',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#3AA6B9',
    borderRadius: 5,
    padding: 15,
    width: '60%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UltimoCiclo;
