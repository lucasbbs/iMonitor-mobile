import React, { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

interface Props extends TextInputProps {
  iconName?: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}
export function Input({ value, iconName, ...rest }: Props) {
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
      <TextInput
        style={styles.inputText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </View>
  );
}
