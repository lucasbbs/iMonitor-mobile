import { StyleSheet } from 'react-native';
import { Archivo_400Regular } from '@expo-google-fonts/archivo';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004C4C',
  },
  screenTitle: {
    color: '#FFFFFF',
    fontFamily: 'Archivo_400Regular',
    fontSize: 14,
  },
  topBar: {
    paddingHorizontal: 40,
    paddingRight: 15,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#66B2B2',
    paddingTop: 15,
    paddingBottom: 17,
  },
  header: {
    paddingHorizontal: 40,
    height: 245,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
});
export default styles;
