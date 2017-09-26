import React, { Component } from 'react';
import {
  Button,
  View,
} from 'react-native';
import styles from './styles';

type Props = {
  children: Array<Component>,
  onPressReloadData: () => mixed,
}

export class Footer extends Component<Props> {
  props: Props
  handleOnPress = () => {
    this.props.onPressReloadData();
  }
  render() {
    const {
      button,
      footer,
    } = styles;
    return (
      <View style={footer}>
        <Button
          color='#AAA'
          onPress={this.handleOnPress}
          title='Refresh Data'
        />
      </View>
    );
  }
}
