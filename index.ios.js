/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';
import {
  Header,
  Stats,
} from './components/index';

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#CCCCCC',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
});

export default class sMonitor extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Header>sMonitor v1.0</Header>
        <Stats />
      </View>
    );
  }
}

AppRegistry.registerComponent('sMonitor', () => sMonitor);
