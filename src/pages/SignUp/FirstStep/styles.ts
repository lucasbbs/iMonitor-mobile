import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingBottom: 24,
    backgroundColor: '#E5E5E5',
  },
  form: { paddingHorizontal: 32, backgroundColor: '#E5E5E5' },
  steps: { flexDirection: 'row' },
  header: {
    position: 'absolute',
    height: 370,
    backgroundColor: '#E5E5E5',
    width: '100%',
  },
  headerButtons: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: getStatusBarHeight(),
  },

  title: {
    marginHorizontal: 32,
    marginTop: 92,
    fontSize: 32,
    color: '#000000',
    fontFamily: 'Poppins_600SemiBold',
  },
  formTitle: {
    marginTop: 92,
    fontSize: 24,
    color: '#000000',
    fontFamily: 'Poppins_600SemiBold',
  },
  subTitle: {
    marginHorizontal: 32,
    marginBottom: 40,
    marginTop: 16,
    fontSize: 14,
    color: '#6A6180',
    fontFamily: 'Poppins_400Regular',
  },
});

export default styles;
