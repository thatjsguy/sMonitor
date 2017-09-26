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

import styles from './styles';

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
        <Header>sMonitor v0.1</Header>
        <Stats {...this.state} />
        <Footer
          onPressReloadData={this.getData}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('sMonitor', () => sMonitor);
