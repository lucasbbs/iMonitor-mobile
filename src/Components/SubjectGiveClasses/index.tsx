import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { Input } from '../Input';
import MaskInput from 'react-native-mask-input';
import { Picker } from '@react-native-picker/picker';
import { SubjectGiveClassesItem } from '../SubjectGiveClassesItem';

interface Props {
  name: string;
  onDelete?: () => {};
}
interface ClassProps {
  id: number;
  initialFromTime: string;
  initialToTime: string;
  initialWeekDay: string;
}
export function SubjectGiveClasses({ name, onDelete }: Props) {
  const [classes, setClasses] = useState<ClassProps[]>([
    {
      id: 0,
      initialFromTime: '08:00',
      initialToTime: '14:00',
      initialWeekDay: '0',
    },
    {
      id: 1,
      initialFromTime: '08:00',
      initialToTime: '14:00',
      initialWeekDay: '1',
    },
    {
      id: 2,
      initialFromTime: '08:00',
      initialToTime: '14:00',
      initialWeekDay: '2',
    },
    {
      id: 3,
      initialFromTime: '08:00',
      initialToTime: '14:00',
      initialWeekDay: '3',
    },
  ]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
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
        <Input></Input>
        <Text>Horários disponíveis</Text>
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={classes}
          renderItem={({ item }) => (
            <SubjectGiveClassesItem
              initialFromTime={item.initialFromTime}
              initialToTime={item.initialToTime}
              initialWeekDay={item.initialWeekDay}
            />
          )}
        />
      </Collapsible>
    </View>
  );
}
