import React, {PureComponent} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default class Button extends PureComponent {
  render() {
    const {onPress, style, title, textStyle} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#5A67F2',
          width: '50%',
          height: 40,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#FFFFFF',
            textAlign: 'center',
            padding: 5,
            ...textStyle,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
