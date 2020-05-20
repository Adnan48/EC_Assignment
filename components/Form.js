import React, {PureComponent} from 'react';
import {View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import EditDetailView from './EditDetailView';
import {updateUserData, addUserList, initUserData} from '../actions/uiAction';
import {connect} from 'react-redux';
import Button from './Button';
import Header from './Header';

class Form extends PureComponent{

    onChangeName= (text) => this.props.dispatch(updateUserData({name: text}));

    onChangeEmail= (text) => this.props.dispatch(updateUserData({email: text}));
    onChangeTypeOfVisit= (text) => this.props.dispatch(updateUserData({typeOfVisit: text}));
    onChangePersonToVisit= (text) => this.props.dispatch(updateUserData({personToVisit: text}));
    onChangeDateOfEntry= (text) => this.props.dispatch(updateUserData({dateOfEntry: text}));
    onChangeTimeOfEntry= (text) => this.props.dispatch(updateUserData({timeOfEntry: text}));
    onChangeTimeOfExit= (text) => this.props.dispatch(updateUserData({timeOfExit: text}));

    onPressSubmit = () =>{
        this.props.dispatch(addUserList());
        this.props.dispatch(initUserData());
    }

    render(){
        const {name, email, typeOfVisit, personToVisit, timeOfEntry, timeOfExit} = this.props.userData;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }} >
                <KeyboardAvoidingView behavior="height" >
                <Header title="Form" onPressOpen={() => this.props.navigation.openDrawer() } />
                <EditDetailView property="Name*" onChangeText={this.onChangeName} value={name} />
                <EditDetailView property="Email*" onChangeText={this.onChangeEmail} value={email} />
                <EditDetailView property="Type of Visit" onChangeText={this.onChangeTypeOfVisit} value={typeOfVisit} />
                <EditDetailView property="Person to Visit*" onChangeText={this.onChangePersonToVisit} value={personToVisit} />
                <EditDetailView property="Date of entry" onChangeText={this.onChangeDateOfEntry} value={String(new Date())} editable={false} />
                <EditDetailView property="Time of Entry" onChangeText={this.onChangeTimeOfEntry} value={timeOfEntry} />
                <EditDetailView property="Time of Exit" onChangeText={this.onChangeTimeOfExit} value={timeOfExit} />
                
<Button title="Submit" style={{ width: '50%', alignSelf: 'center' }} onPress={this.onPressSubmit} />
</KeyboardAvoidingView>
                </View>
        );
    }
}


function mapStateToProps(reduxStore) {
    return {
      userData: reduxStore.uiReducer.userData,
    };
  }
  
  export default connect(mapStateToProps, null)(Form);