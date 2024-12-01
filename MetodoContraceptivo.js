import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

const MetodoContraceptivo = ({ navigation }) => {
  const handleSelection = (metodo) => {
    Alert.alert('Método selecionado', `Você selecionou: ${metodo}`);
    navigation.navigate('RotinaTreinos'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual método contraceptivo você utiliza?</Text>

      {/* Botão Anticoncepcional */}
      <TouchableOpacity style={styles.option} onPress={() => handleSelection('Anticoncepcional')}>
        <Image source={require('./assets/birthcontrol.png')} style={styles.icon} />
        <Text style={styles.optionText}>Anticoncepcional</Text>
      </TouchableOpacity>

      {/* Botão DIU */}
      <TouchableOpacity style={styles.option} onPress={() => handleSelection('DIU')}>
        <Image source={require('./assets/hormonalDIU.png')} style={styles.icon} />
        <Text style={styles.optionText}>DIU</Text>
      </TouchableOpacity>

      {/* Botão Anel Vaginal */}
      <TouchableOpacity style={styles.option} onPress={() => handleSelection('Anel Vaginal')}>
        <Image source={require('./assets/vaginaplug.png')} style={styles.icon} />
        <Text style={styles.optionText}>Anel Vaginal</Text>
      </TouchableOpacity>

      {/* Botão Implanon */}
      <TouchableOpacity style={styles.option} onPress={() => handleSelection('Implanon')}>
        <Image source={require('./assets/implanon.png')} style={styles.icon} />
        <Text style={styles.optionText}>Implanon</Text>
      </TouchableOpacity>

      {/* Botão Outro */}
      <TouchableOpacity style={styles.option} onPress={() => handleSelection('Outro')}>
        <Text style={styles.optionText}>Outro</Text>
      </TouchableOpacity>

      {/* Botão Nenhum */}
      <TouchableOpacity style={styles.option} onPress={() => handleSelection('Nenhum')}>
        <Text style={styles.optionText}>Nenhum</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3AA6B9',
    textAlign: 'center',
    marginBottom: 30,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '80%',
    marginVertical: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#3AA6B9',
    fontWeight: 'bold',
  },
});

export default MetodoContraceptivo;
