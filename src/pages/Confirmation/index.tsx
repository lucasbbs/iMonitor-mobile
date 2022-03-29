import React from 'react';
import { StatusBar, Text, useWindowDimensions, View } from 'react-native';

import dotsImg from '../../assets/dots.json';
import DoneSvg from '../../assets/images/done.svg';

import styles from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
  confirmText: string;
}

export function Confirmation() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    message,
    nextScreenRoute,
    title,
    confirmText,
  } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute' }}>
        <LottieView
          style={{ width: 400, alignSelf: 'center' }}
          resizeMode='cover'
          autoPlay
          loop
          source={dotsImg}
        />
      </View>

      <View style={styles.content}>
        <DoneSvg width={80} height={80} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.footer}>
        <Button
          color='#B2D8D8'
          textColor='black'
          title={confirmText}
          onPress={handleConfirm}
        />
      </View>
    </View>
  );
}
