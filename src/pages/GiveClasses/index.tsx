import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
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
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import MaskInput, { Mask, Masks } from 'react-native-mask-input';
import { Picker } from '@react-native-picker/picker';
import * as Yup from 'yup';
import style from '../../components/Bullet/styles';
import { SubjectGiveClassesItem } from '../../components/SubjectGiveClassesItem';
import { Input } from '../../components/Input';
import Collapsible from 'react-native-collapsible';

import Swipeout from 'react-native-swipeout';
import { Button } from '../../components/Button';
import { Archivo_100Thin } from '@expo-google-fonts/archivo';
import { useAuth } from '../../hooks/auth';
interface iSubject {
  name: string;
  value: string;
  subject: number;
  cost?: number;
}

export function GiveClasses() {
  const { user, updateUser } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [subject, setSubject] = useState<iSubject>({} as iSubject);
  const [subjects, setSubjects] = useState<iSubject[]>([]);
  const [week_day, setWeekDay] = useState('');
  const [initialTime, setInitialTime] = useState('');
  const [finalTime, setFinalTime] = useState('');
  const [cost, setCost] = useState('');
  const [classes, setClasses] = useState(user.classes ? user.classes : []);

  function handleVisible() {
    setIsVisible(!isVisible);
  }
  async function handleSubmit() {
    console.log([
      ...classes,
      {
        cost,
        subject: subject.value,
        id: Date.now(),
        initialFromTime: initialTime,
        initialToTime: finalTime,
        initialWeekDay: week_day,
      },
    ]);
    try {
      const schema = Yup.object().shape({
        subject: Yup.string().required('É necessário escolher uma matéria'),
        week_day: Yup.string().required(
          'É necessário escolher um dia da semana'
        ),
        toTime: Yup.string()
          .required()
          .matches(
            /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
            'Informe um horário válido'
          ),
        fromTime: Yup.string()
          .required()
          .matches(
            /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
            'Informe um horário válido'
          ),
      });
      const dataToValidate = {
        cost,
        subject: subject.value,
        id: Date.now(),
        fromTime: initialTime,
        toTime: finalTime,
        week_day: week_day,
      };
      await schema.validate(dataToValidate);

      console.log(subject, 'Este aqui é o valor da matéria', [
        ...classes,
        ,
        'Este aqui é o valor da classe',
      ]);

      setClasses([
        ...classes,
        {
          cost,
          subject: subject.value,
          id: Date.now(),
          initialFromTime: initialTime,
          initialToTime: finalTime,
          initialWeekDay: week_day,
        },
      ]);
      setSubjects([
        ...subjects.filter((subj) => subj.value !== subject.value),
        subject,
      ]);
      // const data = {
      //   subject,
      //   week_day,
      //   time: initialTime,
      // };
    } catch (error) {
      Alert.alert('Opa', error.message);
    }
  }

  useEffect(() => {
    updateUser({ ...user, classes: classes });
  }, [classes]);

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

  const onDeleteItem = (id: string) => {
    setSubjects(subjects.filter((subj) => subj.value !== id));
    setClasses(classes.filter((classe) => classe.subject !== id));
  };
  const { navigate } = useNavigation();
  const handleSave = () => {
    const schedule = classes.map((classe) => ({
      subject: Number(classe.subject),
      week_day: Number(classe.initialWeekDay),
      from: classe.initialFromTime,
      to: classe.initialToTime,
    }));
    api.post('/classes', {
      user_id: user.user_id ? user.user_id : user.id,
      classes: subjects,
      schedule,
    });
    navigate('Confirmation', {
      nextScreenRoute: 'Profile',
      title: 'Cadastro\nconcluído!',
      message:
        'Agora você faz é monitor na\nplataforma iMonitor\nAgora só falta você atualizar o seu número de Whatsapp',
      confirmText: 'Atualizar Whatsapp',
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <View style={[{ height: '50%' }]}>
          <Modal
            animationType='slide'
            transparent={false}
            visible={isVisible}
            onRequestClose={handleVisible}
          >
            <View style={styles.modal}>
              <View style={styles.searchForm}>
                <Text style={[styles.label, { marginBottom: 0 }]}>Matéria</Text>
                <Picker
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 8,
                    marginTop: 0,
                  }}
                  selectedValue={subject.name}
                  onValueChange={(itemValue, itemIndex) => {
                    setSubject({
                      name: itemValue,
                      value: String(itemIndex),
                      subject: itemIndex,
                    });
                  }}
                >
                  <Picker.Item label='Selecione' enabled={false} value='' />
                  <Picker.Item label='Cálculo 1' value='Cálculo 1' />
                  <Picker.Item label='Cálculo 2' value='Cálculo 2' />
                  <Picker.Item label='Cálculo 3' value='Cálculo 3' />
                  <Picker.Item label='Física 1' value='Física 1' />
                  <Picker.Item label='Física 2' value='Física 2' />
                  <Picker.Item label='Física 3' value='Física 3' />
                  <Picker.Item label='Álgebra Linear' value='Álgebra Linear' />
                  <Picker.Item
                    label='Algoritmos e Programação de Computadores'
                    value='Algoritmos e Programação de Computadores'
                  />
                </Picker>

                <View style={styles.inputGroup}>
                  <View>
                    <Text style={styles.label}>Dia da semana</Text>
                    <Picker
                      style={[
                        styles.weekDay,
                        styles.searchForm,
                        { marginBottom: 0 },
                      ]}
                      selectedValue={week_day}
                      onValueChange={(itemValue, itemIndex) => {
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
                    <Text style={styles.label}>Horário Inicial</Text>
                    <MaskInput
                      style={styles.timeInput}
                      value={initialTime}
                      keyboardType='numeric'
                      onChangeText={(masked, unmasked) => {
                        setInitialTime(masked);
                      }}
                      mask={timeMask}
                    />
                    <Text style={styles.label}>Horário Final</Text>
                    <MaskInput
                      style={styles.timeInput}
                      value={finalTime}
                      keyboardType='numeric'
                      onChangeText={(masked, unmasked) => {
                        setFinalTime(masked);
                      }}
                      mask={timeMask}
                    />
                    <Text style={styles.label}>Valor da aula</Text>
                    <MaskInput
                      style={styles.timeInput}
                      value={cost}
                      keyboardType='numeric'
                      onChangeText={(masked, unmasked) => {
                        setCost(masked);
                        setSubject({ ...subject, cost: Number(unmasked) });
                      }}
                      mask={Masks.BRL_CURRENCY}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.submitButton}
                >
                  <Text style={styles.submitButtonText}>Adicionar</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleVisible}>
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <PageHeader topTitle='Estudar' title='Dar monitorias'></PageHeader>
          <View>
            <View
              style={{
                paddingHorizontal: 16,
                paddingBottom: 16,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Sobre as aulas</Text>
                <TouchableOpacity onPress={handleVisible}>
                  <Feather name={'plus'} size={24} color={'black'} />
                </TouchableOpacity>
              </View>
              <FlatList
                data={subjects}
                keyExtractor={(item: iSubject) => item.value}
                renderItem={({ item }) => (
                  <SubjectGiveClasses
                    name={item.name}
                    id={item.value}
                    onDelete={onDeleteItem}
                    classList={() => {
                      return classes.filter(
                        (classe) => classe.subject == item.value
                      );
                      return [];
                    }}
                  />
                )}
              />
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <View>
                  <Button color='#006666' onPress={handleSave} title='Salvar' />
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
}
interface Props {
  name: string;
  onDelete: (id: string) => void;
  id: string;
  classList: [];
}
interface ClassProps {
  id: number;
  initialFromTime: string;
  initialToTime: string;
  initialWeekDay: string;
  cost: string;
}

export function SubjectGiveClasses({ name, id, onDelete, classList }: Props) {
  const [classes, setClasses] = useState<ClassProps[]>(classList);
  const [cost, setCost] = useState(classes[0].cost ? classes[0].cost : '');
  console.log(classes, 'Esse aqui é o vetor de classList');
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [activeRowKey, setActiveRowKey] = useState<any>(null);

  const swipeSettings = {
    autoClose: true,
    onClose: (secId, rowId, direction) => {
      if (activeRowKey !== null) setActiveRowKey(null);
    },
    onOpen: (secId, rowId, direction) => {
      setActiveRowKey(id);
    },
    right: [
      {
        onPress: () => {
          Alert.alert(
            'Alert',
            'Você tem certeza de que quer excluir?',
            [
              {
                text: 'Não',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Sim',
                onPress: () => {
                  onDelete(id);
                },
                style: 'default',
              },
            ],
            { cancelable: true }
          );
        },
        text: 'Delete',
        type: 'delete',
        rowId: id,
        sectionId: 1,
      },
    ],
  };

  return (
    <Swipeout {...swipeSettings}>
      <View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#333',
            height: 40,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onPress={() => setIsCollapsed(!isCollapsed)}
          >
            <Text style={{ alignSelf: 'center' }}>{name}</Text>
            <Feather name='plus' size={20} color='black' />
          </TouchableOpacity>
        </View>
        <Collapsible style={{ marginHorizontal: 20 }} collapsed={isCollapsed}>
          <Text>Sobre a aula</Text>
          <Text>Custo da sua hora por aula</Text>
          <Input defaultValue={cost}></Input>
          <Text>Horários disponíveis</Text>
          <FlatList
            extraData={classList}
            keyExtractor={(item) => String(item.id)}
            data={classes}
            renderItem={({ item }) => {
              console.log(classes);
              return (
                <SubjectGiveClassesItem
                  initialFromTime={item.initialFromTime}
                  initialToTime={item.initialToTime}
                  initialWeekDay={item.initialWeekDay}
                />
              );
            }}
          />
        </Collapsible>
      </View>
    </Swipeout>
  );
}
