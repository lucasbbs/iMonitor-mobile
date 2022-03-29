import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004C4C',
    paddingTop: 96,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginTop: 40,
    textAlign: 'center',
  },
  message: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#66B2B2',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 25,
  },
  footer: {
    alignItems: 'center',
    marginHorizontal: 38,
    marginVertical: 80,
  },
});

export default styles;
