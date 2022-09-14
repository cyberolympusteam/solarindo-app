import {legacy_createStore as createStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const initialState = {
  userInfo: {
    name: '',
    email: '',
    phone: '',
  },
};

const store = createStore(rootReducer, initialState);
export default store;
