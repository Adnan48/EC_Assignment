import ActionType from '../actions/actionType';

const initState = {
  userData: {},
  userList:[],
  newsFeed: [],
};

export default function uiReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.UPDATE_USER_DATA: {
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    }
    case ActionType.ADD_USER_LIST: {
      return {
        ...state,
        userList:[
          ...state.userList,
          action.payload,
        ]
      };
    }
    case ActionType.INIT_USER_DATA: {
      return {
        ...state,
        userData: initState.userData,
      };
    }
    
    case ActionType.READ_DATA_FROM_DISK: {
      return {
        ...state,
        userList: [action.payload],
      };
    }
    case ActionType.FETCH_NEWS_LIST: {
      return {
        ...state,
        // newsFeed: action.payload.articles.map(i => ({title: i.title, url: i.urlToImage })),
        newsFeed: action.payload,
      };
    }
    default:
  }
  return state;
}
