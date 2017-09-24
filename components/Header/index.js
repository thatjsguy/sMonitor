import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import styles from './styles';

type Props = {
  children: Array<Component>,
}

export class Header extends Component<Props> {
  props: Props
  render() {
    const { header } = styles;
    return (
      <Text style={header}>
        {this.props.children}
      </Text>
    );
  }
}
