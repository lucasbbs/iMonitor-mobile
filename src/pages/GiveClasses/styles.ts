import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#006666',
    padding: 100,
  },
  searchForm: {
    paddingHorizontal: 69,
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

// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#8257e5',
//     justifyContent: 'center',
//     padding: 40,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontFamily: 'Archivo_700Bold',
//     color: '#fff',
//     fontSize: 32,
//     lineHeight: 37,
//     maxWidth: 180,
//   },
//   description: {
//     marginTop: 24,
//     color: '#d4c2ff',
//     fontSize: 16,
//     lineHeight: 26,
//     fontFamily: 'Poppins_400Regular',
//     maxWidth: 240,
//   },
//   okButton: {
//     marginVertical: 40,
//     backgroundColor: '#04d361',
//     height: 58,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//   },
//   okButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontFamily: 'Archivo_700Bold',
//   },
// });

// export default styles;
