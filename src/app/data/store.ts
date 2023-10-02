import { configureStore } from '@reduxjs/toolkit';
import userReducer from '~/app/features/userSlice';
import channelReducer from '~/app/features/channelSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer,
  },
});

// Reduxストアの dispatch メソッドの型
export type AppDispatch = typeof store.dispatch;
// アプリケーション全体のステートの型
export type RootState = ReturnType<typeof store.getState>;

// 2. configureStoreでstoreを作成