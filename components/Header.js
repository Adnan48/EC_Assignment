import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

export default class Header extends PureComponent{
    render(){
        const {title, onPressOpen} = this.props;
        return(
<View style={{ height: 60, width: '100%', flexDirection: 'row', padding: 10 }} >
    <Text onPress={onPressOpen} style={{ borderWidth: 1, padding: 5 }} > Open</Text>
    <Text style={{ marginLeft: 10, fontSize: 24 }} >{title}</Text>
    </View>
        )
    }
}