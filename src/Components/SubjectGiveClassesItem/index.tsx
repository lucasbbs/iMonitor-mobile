import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MaskInput, { Mask } from 'react-native-mask-input';
import styles from './styles';
interface Props {
  initialWeekDay: string;
  initialFromTime: string;
  initialToTime: string;
}

export function SubjectGiveClassesItem({
  initialWeekDay,
  initialFromTime,
  initialToTime,
}: Props) {
  const [weekDay, setWeekDay] = useState(initialWeekDay);
  const [timeFrom, setTimeFrom] = useState(initialFromTime);
  const [timeTo, setTimeTo] = useState(initialToTime);

  const timeMask: Mask = (text: string | undefined) => {
    if (!text) return [];
    const cleanTime = text.replace(/\D+/g, '');

    const hourFirstDigit = /[012]/;
    let hourSecondDigit = /\d/;

    if (cleanTime.charAt(0) === '2') {
      hourSecondDigit = /[0123]/;
    }

    const minuteFirstDigit = /[012345]/;
    const minuteSecondDigit = /\d/;

    return [
      hourFirstDigit,
      hourSecondDigit,
      ':',
      minuteFirstDigit,
      minuteSecondDigit,
    ];
  };

  return (
    <View>
      <View style={styles.searchForm}>
        <Text style={styles.label}>Dia da semana</Text>
        <Picker
          style={styles.weekDay}
          selectedValue={weekDay}
          onValueChange={(itemValue) => {
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

        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Dia da semana</Text>
            <MaskInput
              style={styles.timeInput}
              value={timeFrom}
              keyboardType='numeric'
              onChangeText={(masked, unmasked) => {
                setTimeFrom(masked);
              }}
              mask={timeMask}
            />
          </View>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Horário</Text>
            <MaskInput
              style={styles.timeInput}
              value={timeTo}
              keyboardType='numeric'
              onChangeText={(masked) => {
                setTimeTo(masked);
              }}
              mask={timeMask}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
