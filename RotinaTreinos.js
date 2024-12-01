import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const RotinaTreinos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagem do Ciclito */}
      <Image source={require('./assets/ciclito.png')} style={styles.icon} />

      {/* Texto principal */}
      <Text style={styles.title}>Sou eu de novo!</Text>

      {/* Texto descritivo */}
      <Text style={styles.description}>
        Estamos quase lá... Só preciso saber sobre sua rotina de treinos para poder personalizá-lo de acordo com o seu corpo
      </Text>

      {/* Navegação */}
      <View style={styles.navigation}>
        {/* Seta para voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navButton}>
          <Text style={styles.navText}>⟨⟨</Text>
        </TouchableOpacity>

        {/* Seta para avançar */}
        <TouchableOpacity onPress={() => navigation.navigate('AtividadeFisica')} style={styles.navButton}>
          <Text style={styles.navText}>⟩⟩</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0DED7',
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
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  navButton: {
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 24,
    color: '#3AA6B9',
    fontWeight: 'bold',
  },
});

export default RotinaTreinos;
