// TreinoRecomendado.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const TreinoRecomendado = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título Principal */}
      <Text style={styles.title}>O treino ideal para sua Quarta-feira:</Text>

      {/* Card de Treinos */}
      <View style={styles.cardContainer}>
        <View style={styles.exerciseContainer}>
          <Image source={require('./assets/mulherBulgaro.png')} style={styles.exerciseImage} />
          <Text style={styles.exerciseTitle}>LEG DAY</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LegDay')}>
            <Text style={styles.buttonText}>VER TREINO</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.plusSign}>+</Text>

        <View style={styles.exerciseContainer}>
          <Image source={require('./assets/mulherCorrendo.png')} style={styles.exerciseImage} />
          <Text style={styles.exerciseTitle}>CARDIO</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cardio')}>
            <Text style={styles.buttonText}>VER TREINO</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Relatório Semanal de Intensidade */}
      <View style={styles.reportContainer}>
        <View style={styles.reportHeader}>
          <Image source={require('./assets/estatistica.png')} style={styles.statsIcon} />
          <Text style={styles.reportTitle}>Seu relatório semanal de intensidade:</Text>
        </View>

        {/* Gráfico Simulado */}
        <View style={styles.barChart}>
          {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].map((day, index) => (
            <View key={index} style={styles.barContainer}>
              <Text style={styles.dayLabel}>{day}</Text>
              <View style={[styles.bar, { width: `${(index + 1) * 10}%` }]} />
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F6F7FC',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    color: '#3AA6B9',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  exerciseContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  exerciseImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3AA6B9',
    marginBottom: 10,
  },
  plusSign: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3AA6B9',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#3AA6B9',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#3AA6B9',
    fontWeight: 'bold',
    fontSize: 16,
  },
  reportContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
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
