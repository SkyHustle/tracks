import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  // always return an object and never modify state directly
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token })
    } catch (err) {
      // We always call dispatch every time we want to update our state
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {

  };
};

const signout = (dispatch) => {
  return () => {

  };
};


export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup},
  { token: null, errorMessage: '' }
);