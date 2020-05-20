import React, {PureComponent} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class EditDetailView extends PureComponent{
    render(){
        const {property, onChangeText, value, editable} = this.props;
        return(
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }} >
                <Text style={{ width: '40%' }} > {property} : </Text>
                <TextInput
      style={{ height: 40, width: '60%', borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
      onChangeText={onChangeText}
      value={value}
      editable={editable}
    />
                </View>
        );
    }
}