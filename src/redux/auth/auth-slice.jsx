import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: '',
    isLoggedIn: false,
    isLoading: false,
  },
  extraReducers: {
    [authOperations.register.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, payload) {
      state.isLoading = false;
      //   console.log(state, payload);
      //   console.log('записать юзера, токен, isLoggedIn');
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](_, payload) {
      console.log('error', payload);
    },

    [authOperations.login.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected](_, payload) {
      console.log('error', payload);
    },

    [authOperations.logout.pending]({ isLoading }, _) {
      isLoading = true;
    },
    [authOperations.logout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](_, payload) {
      console.log('error', payload);
    },
  },
});

export default authReducer.reducer;