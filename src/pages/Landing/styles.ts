import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Poppins_400Regular } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  userNameContainer: { width: 220 },
  userName: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Poppins_400Regular',
  },
  avatar: {
    marginRight: 10,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eee',
  },
  containerHeaderProfile: {
    height: 48,
    marginBottom: 18,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    height: 375,
    paddingTop: getStatusBarHeight() + 30,
    backgroundColor: '#004C4C',
    paddingBottom: 320,
  },
  body: { marginTop: 0, paddingHorizontal: 32, marginBottom: 65 },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 50,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#004C4C',
  },

  buttonSecondary: {
    backgroundColor: '#006666',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#9C98A6',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default styles;
