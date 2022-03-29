import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingBottom: 24,
    backgroundColor: '#f0f0f7',
  },
  form: { width: '100%', marginVertical: 24 },
  formFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#9C98A6',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    padding: 10,
  },
  rememberMe: {
    marginLeft: 12,
    color: '#9C98A6',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    height: 370,
    backgroundColor: '#004C4C',
    width: '100%',
  },
  body: {
    paddingHorizontal: 32,
    marginTop: 57,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Archivo_700Bold',
    color: '#32264D',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createAccount: {
    color: '#004C4C',
  },
  button: {},
});

export default styles;
