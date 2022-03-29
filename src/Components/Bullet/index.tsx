import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

interface Props {
  active?: boolean;
}

export function Bullet({ active = false }: Props) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: active ? '#6A6180FF' : '#6A618080' },
      ]}
    />
  );
}
