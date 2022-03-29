import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'expo-checkbox';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import * as Yup from 'yup';

import styles from './styles';
import BackgroundSvg from '../../assets/images/BackgroundIMonitor.svg';

export function SignIn() {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('A senha é obrigatória'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
      });

      await schema.validate({ email, password });
      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Erro na autenticação ',
          error + 'Ocorreu um erro ao fazer login, verifique as credenciais'
        );
      }
    }
  };
  const navigation = useNavigation();

  const handleNewAccount = () => {
    navigation.navigate('FirstStep');
  };

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackgroundSvg height={316.7} width={320} />
          </View>
          <View style={styles.body}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Fazer login</Text>
              <TouchableOpacity onPress={handleNewAccount}>
                <Text style={styles.createAccount}>Criar uma conta</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.form}>
              <Input
                iconName='mail'
                placeholder='E-mail'
                keyboardType='email-address'
                autoCorrect={false}
                onChangeText={setEmail}
                value={email}
              />
              <PasswordInput
                iconName='lock'
                placeholder='Password'
                onChangeText={setPassword}
                value={password}
              />
            </View>
            <View style={styles.formFooter}>
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  onValueChange={setCheckBoxValue}
                  color='#004C4C'
                  disabled={false}
                  value={checkBoxValue}
                />
                <TouchableOpacity
                  onPress={() => setCheckBoxValue(!checkBoxValue)}
                >
                  <Text style={styles.rememberMe}>Lembrar-me</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={{ color: '#9C98A6' }}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>
            <Button
              style={styles.button}
              title='Entrar'
              color='#006666'
              onPress={handleSignIn}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
