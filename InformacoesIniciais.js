import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const InformacoesIniciais = () => {
  return (
    <View style={styles.container}>
        <Image
        source={require('./assets/ciclito.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Olá, eu sou o Ciclito!</Text>
      <Text style={styles.subtitle}>Para começarmos, preciso saber algumas informações sobre você:</Text>
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
});

export default InformacoesIniciais;
