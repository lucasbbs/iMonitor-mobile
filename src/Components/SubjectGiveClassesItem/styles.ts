import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f7',
  },
  teacherList: {
    height: '65%',
    marginTop: -40,
  },
  searchForm: {
    // paddingHorizontal: 40,
    marginBottom: 24,
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },
  weekDay: { backgroundColor: '#E6E6F0', fontFamily: 'Poppins_400Regular' },
  timeInput: {
    fontFamily: 'Poppins_400Regular',
    paddingTop: 9,
    paddingHorizontal: 16,
    height: 54,
    backgroundColor: '#E6E6F0',
  },
  input: {
    height: 54,
    backgroundColor: '#E6E6F0',
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
    backgroundColor: '#DC310B',

    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;
