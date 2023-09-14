import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '../types/type';

const initialState: InitialUserState = {
  user: null,
};

// createSlice関数でスライス作成
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

// 1. userSlice.actionsオブジェクトからlogin/logoutプロパティをexport
// 2. userSlice.reducerでReducer関数をexport
// → 他モジュールでAction Creator, Reducer関数を呼び、Reduxストア内のstate更新が可能
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
