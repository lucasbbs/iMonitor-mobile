import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchForm: {
    paddingHorizontal: 40,
    marginBottom: 24,
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },
  weekDay: { backgroundColor: 'white', fontFamily: 'Poppins_400Regular' },
  timeInput: {
    fontFamily: 'Poppins_400Regular',
    paddingTop: 9,
    paddingHorizontal: 16,
    height: 54,
    backgroundColor: 'white',
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputBlock: {
    width: '48%',
  },

  submitButton: {
    backgroundColor: '#66B2B2',

    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#000',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;
