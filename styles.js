import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#CCCCCC',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    position: 'absolute',
    left: '20%',
    right: '20%',
    bottom: '40%',
    top: '40%',
  },
  loadingText: {
    color: '#CDCDCD',
    marginBottom: 10,
  }
});