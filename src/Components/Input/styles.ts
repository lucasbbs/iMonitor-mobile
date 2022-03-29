import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Poppins_400Regular } from '@expo-google-fonts/poppins';

interface Props {
  isFocused: boolean;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  iconContainer: {
    height: 56,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    backgroundColor: '#E6E6F0',
  },
  inputText: {
    height: 56,
    flex: 1,
    backgroundColor: '#E6E6F0',
    color: '#6A6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    paddingHorizontal: 23,
    paddingVertical: 0,
  },
});

export default styles;
