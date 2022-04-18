import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface OptionProps {
  active: boolean;
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  header: {
    position: 'absolute',
    width: '100%',
    height: 280,
    backgroundColor: '#004C4C',
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'center',
  },
  headerTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
  },
  headerTitle: {
    marginTop: 5,
    fontSize: 25,
    fontFamily: 'Archivo_700Bold',
    color: '#FFFFFF',
  },
  section: {},
  logoutButton: {},
  photoContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#eee',
    marginTop: 16,
  },
  photo: { width: 160, height: 160, borderRadius: 80 },
  photoButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#66B2B2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 110,
    right: 105,
    zIndex: 2,
  },
  buttonContainer: {},
  content: {
    marginTop: 300,
    bottom: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  options: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    paddingBottom: 0,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
});

export default styles;
