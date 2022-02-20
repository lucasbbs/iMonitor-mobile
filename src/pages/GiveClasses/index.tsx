import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

export function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode='contain'
      >
        <Text style={styles.title}>Quer ser um proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <TouchableOpacity onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </TouchableOpacity>
    </View>
  );
}
