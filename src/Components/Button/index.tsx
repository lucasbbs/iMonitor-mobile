import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  textColor?: string;
  // onPress: () => void;
  // disabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  textColor = 'white',
  disabled = false,
  loading = false,
  light = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      {...rest}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          borderRadius: 8,
          backgroundColor: color ? color : 'red',
          opacity: disabled || loading ? 0.5 : 1,
          marginTop: 24,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={'red'} />
      ) : (
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
