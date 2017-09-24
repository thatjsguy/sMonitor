import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  stats: {
    padding: 20,
    flex: 1,
  },
  stat: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.1,
    marginBottom: 10,
  },
  label: {
    // borderColor: '#777',
    // backgroundColor: '#DDD',
    // borderWidth: 1,
    // marginBottom: 10,
    // padding: 10,
    color: '#777',
    fontSize: 15,
    lineHeight: 15,
    flex: 1,
    padding: 10,
    textAlign: 'right',
  },
  value: {
    flex: 1,
    fontSize: 25,
    lineHeight: 35,
  }
});
