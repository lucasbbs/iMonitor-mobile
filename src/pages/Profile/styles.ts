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
    height: 300,
    backgroundColor: '#800020',
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
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'Archivo_700Bold',
    color: '#FFFFFF',
  },
  section: {},
  logoutButton: {},
  photoContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#eee',
    marginTop: 16,
  },
  photo: { width: 180, height: 180, borderRadius: 90 },
  photoButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DC310B',
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
    paddingBottom: 10,
  },
  optionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
  },
});

export default styles;
