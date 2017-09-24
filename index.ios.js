/* @flow */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Footer,
  Header,
  Stats,
} from './components/index';

import config from './config/env.js';

const styles = StyleSheet.create({
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

export default class sMonitor extends Component {
  state = {
    loading: false,
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    this.setState({ loading: true });
    const { api } = config;
    fetch(`${api.server}:${api.port}/status.json`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ loading: false });
        this.setState({ ...responseJson });
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.error(error);
      });
  }
  render() {
    const { container, indicator, loadingText, modal } = styles;
    return (
      <View style={container}>
        <Modal
          animationType='fade'
          style={modal}
          transparent
          visible={this.state.loading}
        >
          <View
            style={indicator}
          >
            <Text style={loadingText}>Loading Data...</Text>
            <ActivityIndicator size='large' />
          </View>
        </Modal>
        <Header>sMonitor v1.0</Header>
        <Stats {...this.state} />
        <Footer
          onPressReloadData={this.getData}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('sMonitor', () => sMonitor);
