import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import LottieView from 'lottie-react-native';
import landingImg from '../../assets/landingPage.json';
import { useAuth } from '../../hooks/auth';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import StudySvg from '../../assets/images/study.svg';
import GiveClassesSvg from '../../assets/images/giveClasses.svg';
import EmojiHeartSvg from '../../assets/images/emojiHeart.svg';
import PowerSvg from '../../assets/images/power.svg';
import heartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';
import api from '../../services/api';

export function Landing() {
  const { user, signOut } = useAuth();
  console.log(user);
  const [totalConnections, setTotalConnections] = useState(0);

  useFocusEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  });

  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate({ name: 'GiveClasses', key: 'GiveClasses' });
  }
  function handleNavigateToStudyPage() {
    navigate('Study');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerHeaderProfile}>
          <TouchableOpacity
            onPress={() => navigate('Profile')}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Image
              style={styles.avatar}
              height={48}
              width={48}
              source={{ uri: user.avatar }}
            />
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={signOut}>
            <PowerSvg width={40} />
          </TouchableOpacity>
        </View>
        <LottieView
          style={{ width: 400, alignSelf: 'center' }}
          resizeMode='contain'
          source={landingImg}
          autoPlay
          loop
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>
          Seja bem vindo,{'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={handleNavigateToStudyPage}
            style={[styles.button, styles.buttonPrimary]}
          >
            <StudySvg width={60} />
            <Text style={styles.buttonText}>Estudar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNavigateToGiveClassesPage}
            style={[styles.button, styles.buttonSecondary]}
          >
            <GiveClassesSvg width={60} />
            <Text style={styles.buttonText}>Dar Monitorias</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexões já realizadas{' '}
          <EmojiHeartSvg width={14} />
        </Text>
      </View>
    </View>
  );
}
