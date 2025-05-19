import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardCiclo = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [faseCiclo, setFaseCiclo] = useState('');
  const diaAtual = new Date().getDate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');

        if (!token || !userId) {
          Alert.alert('Erro', 'Sessão expirada. Faça login novamente.');
          return;
        }

        const userRes = await fetch(`http://localhost:5003/api/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const userData = await userRes.json();
        setNickname(userData.nickname);

        const healthRes = await fetch(`http://localhost:5003/api/health/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const healthData = await healthRes.json();

        const fase = calcularFaseCiclo(healthData.healthData.dataUltimoCiclo);
        setFaseCiclo(fase);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        Alert.alert('Erro', 'Falha ao buscar dados. Tente novamente mais tarde.');
      }
    };

    fetchUserData();
  }, []);

  const calcularFaseCiclo = (dataUltimoCiclo) => {
    const hoje = new Date();
    const inicioCiclo = new Date(dataUltimoCiclo);
    const diasDesde = Math.floor((hoje - inicioCiclo) / (1000 * 60 * 60 * 24));

    if (diasDesde <= 5) return 'fase menstrual';
    if (diasDesde <= 13) return 'fase folicular';
    if (diasDesde <= 16) return 'fase ovulatória';
    return 'fase lútea';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/opcao1.png')} style={styles.avatar} />
        <Text style={styles.greeting}>Olá, {nickname}!</Text>
      </View>

      <Text style={styles.faseText}>
        Você está na <Text style={styles.boldText}>{faseCiclo}</Text> do seu ciclo
      </Text>

      <View style={styles.calendarContainer}>
        {[12, 13, 14, 15, 16, 17].map((day) => (
          <View key={day} style={[styles.day, day === diaAtual && styles.activeDay]}>
            <Text style={[styles.dayText, day === diaAtual && styles.activeDayText]}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.cycleMessageContainer}>
        <Image source={require('./assets/ciclito.png')} style={styles.ciclito} />
        <Text style={styles.cycleMessage}>
          Como você está se sentindo hoje?
        </Text>
      </View>

      <Text style={styles.treinoText}>Confira o treino mais indicado para você hoje:</Text>
      <Image source={require('./assets/mulherTreinando.png')} style={styles.treinoImage} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TreinoRecomendado', { faseCiclo })}
      >
        <Text style={styles.buttonText}>Ver Meu Treino</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DashboardCiclo;


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F7FC',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3AA6B9',
  },
  faseText: {
    fontSize: 16,
    color: '#3AA6B9',
    textAlign: 'center',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  day: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDay: {
    backgroundColor: '#ff8c94',
  },
  dayText: {
    color: '#333',
  },
  activeDayText: {
    color: '#fff',
  },
  cycleMessageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  ciclito: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cycleMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  treinoText: {
    fontSize: 16,
    color: '#3AA6B9',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  treinoImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
