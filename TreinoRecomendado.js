import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking } from 'react-native';


const TreinoRecomendado = ({ route }) => {
  const [tiposTreino, setTiposTreino] = useState([]);
  const [intensidade, setIntensidade] = useState('');
  const faseCiclo = route.params?.faseCiclo || '';
  const diasSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

  useEffect(() => {
    const fetchTreino = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');

        if (!token || !userId) {
          Alert.alert('Erro', 'Sessão expirada. Faça login novamente.');
          return;
        }

        const response = await fetch(`http://localhost:5003/api/activity/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = await response.json();
        setTiposTreino(data.activityData.tiposTreino || []);
        setIntensidade(data.activityData.intensidade || '');

      } catch (error) {
        console.error('Erro ao carregar treino:', error);
        Alert.alert('Erro', 'Não foi possível carregar os treinos.');
      }
    };

    fetchTreino();
  }, []);

  const abrirExercicios = (tipo) => {
    let lista = '';
    switch (tipo) {
      case 'Musculação':
        lista = '• Supino reto\n• Leg press\n• Rosca direta\n• Pulley';
        break;
      case 'Crossfit':
        lista = '• Burpees\n• Kettlebell swing\n• Box jump\n• Corrida 400m';
        break;
      case 'Aeróbico':
        lista = '• Polichinelos\n• Corrida leve\n• Subida de escada';
        break;
      case 'Corrida/Caminhada':
        lista = '• Caminhada leve\n• Corrida moderada\n• Sprint 30s';
        break;
      case 'Outro':
        lista = '• Dança\n• Alongamento\n• Yoga leve';
        break;
      default:
        lista = 'Exercícios não definidos.';
    }

    Alert.alert(`Exercícios de ${tipo}`, lista);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Seu treino ({intensidade}) - {faseCiclo}</Text>

      <View style={styles.cardContainer}>
        {tiposTreino.map((tipo, index) => (
          <View key={index} style={styles.exerciseCard}>
            <Image source={require('./assets/mulherTreinando.png')} style={styles.exerciseImage} />
            <Text style={styles.exerciseTitle}>{tipo.toUpperCase()}</Text>
            <TouchableOpacity style={styles.button} onPress={() => abrirExercicios(tipo)}>
              <Text style={styles.buttonText}>VER TREINO</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.reportContainer}>
        <View style={styles.reportHeader}>
          <Image source={require('./assets/estatistica.png')} style={styles.statsIcon} />
          <Text style={styles.reportTitle}>Seu relatório semanal de intensidade:</Text>
        </View>

        <View style={styles.botInstruction}>
  <Text style={styles.botText}>
    Se o treino não é o que esperava, fale com o Ciclito:
  </Text>

  <TouchableOpacity onPress={() => Linking.openURL('https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/15/23/20250415232632-O8RJ5269.json')}>
    <Image
      source={require('./assets/ciclito.png')}
      style={styles.ciclitoImage}
    />
  </TouchableOpacity>
</View>


        <View style={styles.barChart}>
          {diasSemana.map((day, index) => (
            <View key={index} style={styles.barContainer}>
              <Text style={styles.dayLabel}>{day}</Text>
              <View style={[styles.bar, { width: `${Math.random() * 100}%` }]} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TreinoRecomendado;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F6F7FC',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 18,
    color: '#3AA6B9',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  exerciseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    margin: 8,
    width: '40%',
    elevation: 2,
  },
  exerciseImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  exerciseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3AA6B9',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#3AA6B9',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#3AA6B9',
    fontWeight: 'bold',
    fontSize: 13,
  },
  reportContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
  },
  botInstruction: {
    alignItems: 'center',
    marginBottom: 30,
  },
  
  botText: {
    fontSize: 16,
    color: '#3AA6B9',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  
  ciclitoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  
  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statsIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  reportTitle: {
    fontSize: 16,
    color: '#3AA6B9',
    fontWeight: 'bold',
  },
  barChart: {
    width: '100%',
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayLabel: {
    width: 40,
    fontSize: 14,
    color: '#7a7a7a',
    marginRight: 10,
  },
  bar: {
    height: 10,
    backgroundColor: '#C0DED7',
    borderRadius: 5,
  },
});
