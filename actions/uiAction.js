import ActionType from './actionType';
import axiosImport from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const axios = axiosImport.create({timeout: 15000});

export function updateUserData(data) {
  return dispatch => {
    dispatch({type: ActionType.UPDATE_USER_DATA, payload: data});
  };
}

export function addUserList() {
  return (dispatch, getState) => {
    const {userData} = getState().uiReducer;
    dispatch({type: ActionType.ADD_USER_LIST, payload: userData});
  };
}

export function initUserData() {
  return dispatch => {
    dispatch({type: ActionType.INIT_USER_DATA});
  };
}

export async function saveDataIntoDisk(userList) {
  try {
    const jsonValue = JSON.stringify(userList);
    await AsyncStorage.setItem('@userList', jsonValue);
  } catch (e) {
    // saving error
  }
}

export async function readDataFromDisk() {
  return async dispatch => {
    try {
      const value = await AsyncStorage.getItem('@userList');
      if (value !== null) {
        dispatch({
          type: ActionType.READ_DATA_FROM_DISK,
          payload: JSON.parse(value),
        });
      }
    } catch (e) {
      // error reading value
    }
  };
}

export function fetchNewsList() {
  return dispatch => {
    dispatch({type: ActionType.FETCH_NEWS_LIST, payload: fetchNews()});
  };
}

function fetchNews() {
  return axios.get(
    'https://newsapi.org/v2/everything?q=bitcoin&from=2020-04-25&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98',
  );
}
