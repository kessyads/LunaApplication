import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';

const TelaAguarde = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('DashboardCiclo');
  }, [navigation]);


  return (
    <View style={styles.container}>
      {/* Imagem do Ciclito */}
      <Image source={require('./assets/ciclito.png')} style={styles.icon} />

      {/* Texto de Carregamento */}
      <Text style={styles.title}>Entrando...</Text>
      <Text style={styles.subtitle}>Aguarde alguns instantes</Text>

      {/* Spinner */}
      <ActivityIndicator size="large" color="#3AA6B9" style={styles.spinner} />
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
  subtitle: {
    fontSize: 16,
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 20,
  },
  spinner: {
    marginTop: 20,
  },
});

export default TelaAguarde;
