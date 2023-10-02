import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '../types/type';

const initialState: InitialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user', // スライス名
  initialState, // stateの初期値
  reducers: { // stateの変更を処理する関数
    // login, logout = ActionCreator = Actionを生成する純粋関数
    // action.payload = Actionのデータの一部が格納される
    // e.g. loginの場合, userId, id, name, date...etc
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Slice -> action creatorとreducerを内包する為、以下の形でexport
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;