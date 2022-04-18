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
    marginHorizontal: 20,
    width: 'auto',
    padding: 17,
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
