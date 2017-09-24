import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import _ from 'lodash';
import styles from './styles';

type Props = {
  tempInF: number,
  humidity: number,
  heatIndex: number,
  fanTime: number,
  fanIsOn: number,
  humIsOn: number,
  mistCycles: number,
}

export class Stats extends Component<Props> {
  props: Props
  renderStats() {
    if (_.isEmpty(this.props)) return null;
    const {
      stats,
      stat,
      label,
      value,
    } = styles;
    const {
      tempInF,
      humidity,
      heatIndex,
      fanTime,
      fanIsOn,
      humIsOn,
      mistCycles,
    } = this.props;
    return (
      <View style={stats}>
        <View style={stat}>
          <Text style={label}>Temperature:</Text>
          <Text style={value}>{tempInF} °F</Text>
        </View>
        <View style={stat}>
          <Text style={label}>Rel. Humidity:</Text>
          <Text style={value}>{humidity} %</Text>
        </View>
        <View style={stat}>
          <Text style={label}>Heat Index:</Text>
          <Text style={value}>{heatIndex} °F</Text>
        </View>
        <View style={stat}>
          <Text style={label}>Fan Time:</Text>
          <Text style={value}>{fanTime / 1000} sec</Text>
        </View>
        <View style={stat}>
          <Text style={label}>Mist Cycles:</Text>
          <Text style={value}>{mistCycles}</Text>
        </View>
        <View style={stat}>
          <Text style={label}>Fan:</Text>
          <Text style={value}>{fanIsOn ? 'ON' : 'OFF'}</Text>
        </View>
        <View style={stat}>
          <Text style={label}>Humidifier:</Text>
          <Text style={value}>{humIsOn ? 'ON' : 'OFF'}</Text>
        </View>
      </View>
    );
  }
  render() {
    return this.renderStats();
  }
}
