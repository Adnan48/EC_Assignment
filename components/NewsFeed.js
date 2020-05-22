import React, {PureComponent} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Header from './Header';
import {fetchNewsList} from '../actions/uiAction';
import {connect} from 'react-redux';

class NewsFeed extends PureComponent {
  componentDidMount() {
    fetchNewsList();
  }

  renderFlatListItem = ({item}) => <NewsFeedView title={item.title} />;

  render() {
    const newsFeed = this.props.newsFeed;
    const feed = [
      {
        title:
          'Bitcoin Traders Now Eye $6-7Ks After 4 Failed Attempts to Break $10K',
        url:
          'https://s3.cointelegraph.com/storage/uploads/view/77032db5e83bc4f48eafb2892ac4895d.jpg',
      },
      {
        title:
          'Bitcoin Funds From the Bitfinex Hack in 2016 Moving: Are Hackers Selling?',
        url:
          'https://s3.cointelegraph.com/storage/uploads/view/77032db5e83bc4f48eafb2892ac4895d.jpg',
      },
      {
        title: 'Raffica di attacchi informatici ai supercomputer',
        url:
          'https://s3.cointelegraph.com/storage/uploads/view/77032db5e83bc4f48eafb2892ac4895d.jpg',
      },
    ];
    return (
      <View>
        <Header
          title="News Feed"
          onPressOpen={() => this.props.navigation.openDrawer()}
        />

        <FlatList
          data={feed}
          renderItem={this.renderFlatListItem}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    );
  }
}

function mapStateToProps(reduxStore) {
  return {
    newsFeed: reduxStore.uiReducer.newsFeed,
  };
}

export default connect(
  mapStateToProps,
  null,
)(NewsFeed);

class NewsFeedView extends PureComponent {
  render() {
    const {title, url} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          flex: 1,
          alignItems: 'center',
          margin: 5,
          overflow: 'hidden',
        }}>
        <Image
          style={{height: 50, width: 50, padding: 5}}
          source={{uri: url}}
          resizeMode="contain"
        />
        <Text>{title}</Text>
      </View>
    );
  }
}
