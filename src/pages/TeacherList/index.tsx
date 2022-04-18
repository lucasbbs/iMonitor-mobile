import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';
import { Teacher, TeacherItem } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';
import MaskInput, { Mask } from 'react-native-mask-input';
import { Picker } from '@react-native-picker/picker';
import * as Yup from 'yup';

export function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    try {
      const schema = Yup.object().shape({
        subject: Yup.string().required('É necessário escolher uma matéria'),
        week_day: Yup.string().required(
          'É necessário escolher um dia da semana'
        ),
        time: Yup.string()
          .required()
          .matches(
            /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
            'Informe um horário válido'
          ),
      });
      const data = {
        subject,
        week_day,
        time,
      };
      await schema.validate(data);
      const response = await api.get('classes', {
        params: data,
      });
      setTeachers(response.data);
    } catch (error) {
      Alert.alert('Opa', error.message);
    }
    setIsFiltersVisible(false);
  }

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites_monitor');
      if (value !== null) {
        const favoritedTeachersIds = JSON.parse(value).map(
          (teacher: Teacher) => teacher.user_id
        );
        setFavorites(favoritedTeachersIds);
      }
    } catch (e) {
      // error reading value
    }
  };
  useFocusEffect(() => {
    loadFavorites();
  });
  const timeMask: Mask = (text: string) => {
    const cleanTime = text.replace(/\D+/g, '');

    const hourFirstDigit = /[012]/; // only 0,1 or 2
    let hourSecondDigit = /\d/; // any number

    if (cleanTime.charAt(0) === '2') {
      hourSecondDigit = /[0123]/; // only 0,1,2 or 3
    }

    const minuteFirstDigit = /[012345]/; // only 0,1,2,3,4 or 5
    const minuteSecondDigit = /\d/; // any number

    return [
      hourFirstDigit,
      hourSecondDigit,
      ':',
      minuteFirstDigit,
      minuteSecondDigit,
    ];
  };
  return (
    // <KeyboardAvoidingView behavior='position' enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <View style={[{ height: '50%' }]}>
          <PageHeader
            topTitle='Estudar'
            title='Monitores disponíveis'
            headerRight={
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 310,
                  justifyContent: 'space-between',
                }}
                onPress={handleToggleFiltersVisible}
              >
                <View style={{ flexDirection: 'row', width: 245 }}>
                  <Feather name='filter' size={20} color='#66B2B2' />
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 16,
                      marginLeft: 20,
                      fontFamily: 'Archivo_400Regular',
                    }}
                  >
                    Filtrar por dia, hora e matéria
                  </Text>
                </View>
                <Feather
                  name={!isFiltersVisible ? 'chevron-down' : 'chevron-up'}
                  size={20}
                  color='#fff'
                />
              </TouchableOpacity>
            }
          >
            {isFiltersVisible && (
              <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <Picker
                  style={{ backgroundColor: 'white', borderRadius: 8 }}
                  selectedValue={subject}
                  onValueChange={(itemValue, itemIndex) => {
                    console.log(itemIndex, itemValue);
                    setSubject(itemValue);
                  }}
                >
                  <Picker.Item label='Selecione' enabled={false} value='' />
                  <Picker.Item label='Cálculo 1' value='1' />
                  <Picker.Item label='Cálculo 2' value='2' />
                  <Picker.Item label='Cálculo 3' value='3' />
                  <Picker.Item label='Física 1' value='4' />
                  <Picker.Item label='Física 2' value='5' />
                  <Picker.Item label='Física 3' value='6' />
                  <Picker.Item label='Álgebra Linear' value='7' />
                  <Picker.Item
                    label='Algoritmos e Programação de Computadores'
                    value='8'
                  />
                </Picker>

                <View style={styles.inputGroup}>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da semana</Text>
                    <Picker
                      style={styles.weekDay}
                      selectedValue={week_day}
                      onValueChange={(itemValue, itemIndex) => {
                        console.log(itemIndex, itemValue);
                        setWeekDay(itemValue);
                      }}
                    >
                      <Picker.Item label='Selecione' enabled={false} value='' />
                      <Picker.Item label='Domingo' value='0' />
                      <Picker.Item label='Segunda-feira' value='1' />
                      <Picker.Item label='Terça-feira' value='2' />
                      <Picker.Item label='Quarta-feira' value='3' />
                      <Picker.Item label='Quinta-feira' value='4' />
                      <Picker.Item label='Sexta-feira' value='5' />
                      <Picker.Item label='Sábado' value='6' />
                    </Picker>
                  </View>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                    <MaskInput
                      style={styles.timeInput}
                      value={time}
                      keyboardType='numeric'
                      onChangeText={(masked, unmasked) => {
                        setTime(masked);
                      }}
                      mask={timeMask}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleFiltersSubmit}
                  style={styles.submitButton}
                >
                  <Text style={styles.submitButtonText}>Filtrar</Text>
                </TouchableOpacity>
              </View>
            )}
          </PageHeader>
          <View>
            <ScrollView
              style={{}}
              contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
              }}
            >
              {teachers.map((teacher: Teacher, index) => (
                <TeacherItem
                  key={index}
                  teacher={teacher}
                  favorited={favorites.includes(teacher.user_id)}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
}
