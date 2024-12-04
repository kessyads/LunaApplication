import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ConfiguracaoPerfil = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [avatarSelecionado, setAvatarSelecionado] = useState(null);

  const avatares = [
    require('./assets/opcao1.png'),
    require('./assets/opcao2.png'),
    require('./assets/opcao3.png'),
  ];

  const abrirGaleria = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Usuária cancelou a escolha de imagem');
      } else if (response.errorCode) {
        console.error('Erro ao abrir galeria: ', response.errorMessage);
      } else {
        if (response.assets && response.assets.length > 0) {
          const { uri } = response.assets[0];
          setAvatarSelecionado({ uri });
        }
      }
    });
  };

  const handleConfirmar = () => {
    if (!nickname || !nickname.match(/^[a-zA-Z0-9-_]+$/)) {
      Alert.alert('Erro', 'Por favor, insira um nickname válido com "-" e números.');
      return;
    }
    if (!avatarSelecionado) {
      Alert.alert('Erro', 'Por favor, selecione um ícone.');
      return;
    }

    Alert.alert('Sucesso', 'Perfil configurado com sucesso!');
    navigation.navigate('TelaAguarde'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agora vamos criar seu perfil</Text>

      {/* Avatar Selection */}
      <Text style={styles.subtitle}>Escolha um ícone:</Text>
      <View style={styles.avatarContainer}>
        {avatares.map((avatar, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setAvatarSelecionado(avatar)}
            style={[
              styles.avatarButton,
              avatarSelecionado === avatar && styles.avatarSelected,
            ]}
          >
            <Image source={avatar} style={styles.avatarImage} />
          </TouchableOpacity>
        ))}
        {/* Botão para acessar a galeria */}
        <TouchableOpacity onPress={abrirGaleria} style={styles.avatarButton}>
          <View style={styles.maisOpcoesContainer}>
            <Text style={styles.maisOpcoesText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Nickname Input */}
      <Text style={styles.subtitle}>Crie seu Nickname:</Text>
      <Text style={styles.hint}>*Precisa conter "-" e números</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: amanda_07"
        value={nickname}
        onChangeText={setNickname}
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Pronto!</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3AA6B9',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#3AA6B9',
    marginBottom: 10,
    textAlign: 'center',
  },
  hint: {
    fontSize: 14,
    color: '#7a7a7a',
    marginBottom: 10,
    textAlign: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  avatarButton: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 50,
    padding: 10,
  },
  avatarSelected: {
    borderColor: '#3AA6B9',
  },
  avatarImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  maisOpcoesContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3AA6B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maisOpcoesText: {
    fontSize: 36,
    color: '#3AA6B9',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3AA6B9',
    borderRadius: 5,
    padding: 15,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ConfiguracaoPerfil;