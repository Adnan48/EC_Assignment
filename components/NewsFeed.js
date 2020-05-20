import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import axiosImport from 'axios';
import {fetchNewsList} from '../actions/uiAction';
import {connect} from 'react-redux';


class NewsFeed extends PureComponent{

componentDidMount(){
    fetchNewsList();
}

    render(){
        const newsFeed = this.props.newsFeed;
        return(
            <View>
                <Header title="News Feed" onPressOpen={() => this.props.navigation.openDrawer() } />
                {/* {newsFeed.map(news => <Text style={{borderWidth: 1}} >{news.title} </Text> )} */}
        <Text> ,/ {newsFeed}</Text>
                </View>
        )
    }
} 


function mapStateToProps(reduxStore) {
    return {
        newsFeed: reduxStore.uiReducer.newsFeed,
    };
  }
  
  export default connect(mapStateToProps, null)(NewsFeed);