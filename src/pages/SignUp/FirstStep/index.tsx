import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './styles';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

import StarsImg from '../../../assets/dots.json';
import backIcons from '../../../assets/images/icons/back.png';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import LottieView from 'lottie-react-native';

export function FirstStep() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate('SignIn');
  }
  return (
    <KeyboardAvoidingView behavior='position'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <LottieView
              style={{ width: 400, alignSelf: 'center' }}
              resizeMode='cover'
              source={StarsImg}
              autoPlay
              loop
            /> */}
          </View>
          <View>
            <View style={styles.headerButtons}>
              <TouchableOpacity onPress={handleGoBack}>
                <Image source={backIcons} resizeMode='contain' />
              </TouchableOpacity>
              <View style={styles.steps}>
                <Bullet active />
                <Bullet />
              </View>
            </View>
            <Text style={styles.title}>
              Crie sua{'\n'}
              conta gratuíta
            </Text>
            <Text style={styles.subTitle}>
              Basta preencher estes dados{'\n'}e você estará conosco
            </Text>
          </View>
          <View>
            <View style={styles.form}>
              <Text style={styles.formTitle}>01. Quem é você?</Text>
              <Input placeholder='Nome' onChangeText={setName} value={name} />
              <Input
                placeholder='Sobrenome'
                onChangeText={setSurname}
                value={surname}
              />
              <Button
                disabled={!name || !surname}
                title='Próximo'
                color='#004C4C'
                onPress={() => navigate('SecondStep', { name, surname })}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
