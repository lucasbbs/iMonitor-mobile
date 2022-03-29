import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Poppins_400Regular } from '@expo-google-fonts/poppins';
interface ButtonProps {
  color: string;
}

interface ButtonTextProps {
  light: boolean;
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
  },
});

export default styles;
