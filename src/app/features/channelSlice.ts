import { createSlice } from '@reduxjs/toolkit';
import { InitialChannelState } from '~/app/types/type';

// ReduxにおけるStateの初期値をnullに設定
const initialState: InitialChannelState = {
  channelId: null,
  channelName: null,
};

// 1. Redux ToolkitからcreateSlice関数で'Reduxスライス'を生成
// 2. 初期値がnull(&& 型定義済)のInitialStateをimport
export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      // setChannelInfoをDispatchで呼ぶと、
      // 現在のchannelIdを'選択されたchannelId'に変更できる
      // 変更のタイミング(Reducer発火のタイミング)は? → チャンネルクリック時 = SidebarChannel.tsx
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;