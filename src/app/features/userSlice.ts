import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '../types/type';

const initialState: InitialUserState = {
  user: null,
};

// 1. Redux ToolkitからcreateSlice関数で'Reduxスライス'を生成
// 2. 初期値がnull(&& 型定義済)のInitialStateをimport
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // state(現在のステート)に対して、action.payload(新規ユーザー情報)を代入
    // このactionはユーザーログイン時にdispatchされることを想定
    // 一方、logout時はユーザー情報をnull(= 初期化)とする
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
