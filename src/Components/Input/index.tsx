import React, { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

interface Props extends TextInputProps {
  iconName?: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  masked?: boolean;
  height?: number;
}
export function Input({
  height,
  value,
  iconName,
  masked = false,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <View style={styles.container}>
      {!!iconName && (
        <View style={styles.iconContainer}>
          <Feather name={iconName} size={24} color={'black'} />
        </View>
      )}
      {masked ? (
        <MaskInput
          value={'Teste'}
          onChangeText={(e) => console.log(e)}
          mask={Masks.BRL_PHONE}
        />
      ) : (
        <TextInput
          style={
            !height
              ? styles.inputText
              : [styles.inputText, { minHeight: height }]
          }
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      )}
    </View>
  );
}
