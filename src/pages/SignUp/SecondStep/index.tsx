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
import { useNavigation, useRoute } from '@react-navigation/native';

import backIcons from '../../../assets/images/icons/back.png';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import api from '../../../services/api';

export function SecondStep() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate('FirstStep');
  }
  const route = useRoute();
  const { name, surname } = route.params as Params;
  const handleConfirm = () => {
    try {
      const data = {
        name: name + surname,
        email,
        password,
        bio: 'Eu sou o Breno',
        whatsapp: '5561983499994',
      };
      api.post('users', data);
      navigate('Confirmation', {
        nextScreenRoute: 'SignIn',
        title: 'Cadastro\nconcluído!',
        message: 'Agora você faz parte da\nplataforma do IMonitor',
        confirmText: 'Fazer Login',
      });
    } catch (error) {}
  };
  return (
    <KeyboardAvoidingView behavior='position'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View>
            <View style={styles.headerButtons}>
              <TouchableOpacity onPress={handleGoBack}>
                <Image source={backIcons} resizeMode='contain' />
              </TouchableOpacity>
              <View style={styles.steps}>
                <Bullet />
                <Bullet active />
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
              <Text style={styles.formTitle}>02. Email e Senha</Text>
              <Input
                iconName='user'
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
              />
              <PasswordInput
                iconName='lock'
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
              />
              <Button
                disabled={!email || !password}
                title='Concluir Cadastro'
                color='#006666'
                onPress={() => handleConfirm()}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
