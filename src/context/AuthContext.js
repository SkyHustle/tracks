import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  // always return an object and never modify state directly
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return {...state, errorMessage: ''}
    case 'signin':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_error_message' })
  };
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList');
  } catch (err) {
    // We always call dispatch every time we want to update our state
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList');
  } catch (err) {
    // We always call dispatch every time we want to update our state
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
};

const signout = (dispatch) => {
  return () => {

  };
};


export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage},
  { token: null, errorMessage: '' }
);