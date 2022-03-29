import React, { useState } from 'react';
import {
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';

import backIcons from '../../assets/images/icons/back.png';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundSvg from '../../assets/images/background.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { PasswordInput } from '../../components/PasswordInput';
import { useAuth } from '../../hooks/auth';
import styles from './styles';
import { SubjectGiveClasses } from '../../components/SubjectGiveClasses';
import PageHeader from '../../components/PageHeader';

export function Profile() {
  const { user, signOut, updateUser } = useAuth();

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignOut = () => {
    Alert.alert(
      'Tem certeza?',
      'Se vocë sair, vai precisar de internet para conectar-se novamente',
      [
        { text: 'Cancelar', onPress: () => {} },
        {
          text: 'Confirmar',
          onPress: () => signOut(),
        },
      ]
    );
  };

  const handleOptionChange = (option: 'dataEdit' | 'passwordEdit') => {
    setOption(option);
  };

  async function handleSelectAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (result.cancelled) return;
    if (result.uri) setAvatar(result.uri);
  }

  const handleProfileUpdate = async () => {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required('CNH é obrigatória'),
        name: Yup.string().required('nome é obrigatório'),
      });

      const data = { name, driverLicense };
      await schema.validate(data);

      await updateUser({
        id: user.id,
        user_id: user.id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar,
        token: user.token,
      });
      Alert.alert('Perfil atualizado');
    } catch (error) {
      if (error instanceof Yup.ValidationError)
        Alert.alert('Opa', error.message);
      else
        Alert.alert('Não foi possível atualizar as informações do seu perfil');
    }
  };
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <PageHeader topTitle='Meu perfil' />
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.photoButton}
                onPress={handleSelectAvatar}
              >
                <View accessible>
                  <Feather name='camera' size={24} color='white' />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.photoContainer]}
                onPress={() => {
                  Alert.alert('teste');
                  console.log('teste');
                }}
              >
                {!!avatar && (
                  <Image
                    style={[styles.photo, { zIndex: 999 }]}
                    source={{ uri: avatar }}
                  />
                )}
              </TouchableOpacity>
              <Text style={[styles.headerTitle, { marginHorizontal: '20%' }]}>
                {user.name}
              </Text>
              <BackgroundSvg
                style={{ position: 'absolute', zIndex: -10, top: 20 }}
                height={250.66}
                width={280.21}
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.option}
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <Text
                  style={[
                    styles.optionTitle,
                    {
                      marginRight: 15,
                      color: option === 'dataEdit' ? '#800020' : '#999',
                    },
                  ]}
                  active={option === 'dataEdit'}
                >
                  Dados
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('passwordEdit')}
              >
                <Text
                  style={[
                    styles.optionTitle,
                    {
                      marginRight: 15,
                      color: option === 'passwordEdit' ? '#800020' : '#999',
                    },
                  ]}
                  active={option === 'passwordEdit'}
                >
                  Trocar Senha
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('monitorias')}
              >
                <Text
                  style={[
                    styles.optionTitle,
                    { color: option === 'monitorias' ? '#800020' : '#999' },
                  ]}
                  active={option === 'Dar monitorias'}
                >
                  Dar monitorias
                </Text>
              </TouchableOpacity>
            </View>
            {option === 'dataEdit' ? (
              <View style={[styles.section, { height: 254 }]}>
                <Input
                  iconName='user'
                  defaultValue={user.name}
                  placeholder='Nome'
                  autoCorrect={false}
                  onChangeText={setName}
                />
                <Input
                  iconName='mail'
                  defaultValue={user.email}
                  editable={false}
                />
                <Input
                  iconName='credit-card'
                  defaultValue={user.driver_license}
                  placeholder='CNH'
                  keyboardType='numeric'
                  onChangeText={setDriverLicense}
                />
              </View>
            ) : option === 'monitorias' ? (
              <View
                style={{
                  height: '57%',
                  // marginBottom: 59,
                }}
              >
                <FlatList
                  data={[
                    { name: 'Cálculo 1', value: '0' },
                    { name: 'Cálculo 2', value: '1' },
                    { name: 'Cálculo 3', value: '2' },
                    { name: 'Física 1', value: '3' },
                    { name: 'Física 2', value: '4' },
                    { name: 'Física 3', value: '5' },
                    { name: 'Álgebra Linear', value: '6' },
                    {
                      name: 'Algoritmos e Programação de Computadores',
                      value: '7',
                    },
                  ]}
                  keyExtractor={(item) => item.value}
                  renderItem={({ item }) => (
                    <SubjectGiveClasses name={item.name} />
                  )}
                />
              </View>
            ) : (
              <View style={{ height: 254 }}>
                <PasswordInput iconName='lock' placeholder='Senha Atual' />
                <PasswordInput iconName='lock' placeholder='Nova senha' />
                <PasswordInput iconName='lock' placeholder='Repetir senha' />
              </View>
            )}
            <Button
              color='#DC310B'
              style={{ position: 'absolute', bottom: 0 }}
              title='Salvar alterações'
              onPress={handleProfileUpdate}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
