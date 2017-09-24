import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';

type Props = {
  children: Array<Component>,
}

export class Stats extends Component<Props> {
  props: Props
  render() {
    const { stats, stat, label, value } = styles;
    return (
      <View style={stats}>
        <View style={stat}>
          <Text style={label}>Temperature:</Text>
          <Text style={value}>75 F</Text>
        </View>
        <View style={stat}>
          <Text style={label}>Humidity:</Text>
          <Text style={value}>98%</Text>
        </View>
      </View>
    );
  }
}
