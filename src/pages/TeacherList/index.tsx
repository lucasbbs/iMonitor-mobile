import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../Components/PageHeader';
import { Teacher, TeacherItem } from '../../Components/TeacherItem';

import styles from './styles';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

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
    const { data } = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setIsFiltersVisible(false);
    setTeachers(data);
  }

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites_proffy');
      if (value !== null) {
        const favoritedTeachersIds = JSON.parse(value).map(
          (teacher: Teacher) => teacher.id
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
  return (
    <View style={styles.container}>
      <PageHeader
        title='Proffys disponíveis'
        headerRight={
          <TouchableOpacity onPress={handleToggleFiltersVisible}>
            <Feather name='filter' size={20} color='#fff' />
          </TouchableOpacity>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={(text) => setSubject(text)}
              style={styles.input}
              placeholder='Qual a matéria?'
              placeholderTextColor='#c1bccc'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  style={styles.input}
                  placeholder='Qual o dia?'
                  placeholderTextColor='#c1bccc'
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  style={styles.input}
                  placeholder='Qual Horário?'
                  placeholderTextColor='#c1bccc'
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
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher, index) => (
          <TeacherItem
            key={index}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
