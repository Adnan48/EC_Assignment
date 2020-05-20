import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Header from './Header';

class VisitorList extends PureComponent{

    renderFlatListItem = ({item, index}) => (
            <ListItem name={item.name} email={item.email} personToVisit={item.personToVisit} />
        )
    

    render(){
        return(
            <View>
                <Header title="Visitor List" onPressOpen={() => this.props.navigation.openDrawer() } />
                <FlatList
                data={this.props.userList}
                renderItem={this.renderFlatListItem}
                keyExtractor={(item, index) => `${index}` }
                />
                </View>
        )
    }
}


function mapStateToProps(reduxStore) {
    return {
      userList: reduxStore.uiReducer.userList,
    };
  }
  
  export default connect(mapStateToProps, null)(VisitorList);

  class ListItem extends PureComponent{
      render(){
          const {name, email, personToVisit} = this.props;
          return(
              <View style={{ margin: 5, padding: 10, borderWidth: 1, borderRadius: 5 }} >
                    <Text>Name: {name}</Text>
                  <Text>Email: {email}</Text>
                  <Text>Person To Visit: {personToVisit} </Text>

              </View>
          )
      }
  }