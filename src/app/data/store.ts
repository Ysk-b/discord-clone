import { configureStore } from "@reduxjs/toolkit"
import userReducer from "~/app/features/userSlice"

export const store = configureStore({
  reducer: userReducer,
});

// configureStoreとは？
// 最初から処理の流れが理解できない
// ➀ store作成
// ➁userSliceの作成(userSliceとは？使用する意義は？)
// ➂ globalなステート化の為のprovider作成（storeとproviderそれぞれの機能、構造）
// → layout.tsxで、反映させたいcomponentを<Provider>でラップする
// Storeが内包するSliceで、State, Reducer, Action Creatorの3つを内包可能.
