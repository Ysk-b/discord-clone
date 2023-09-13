import { configureStore } from "@reduxjs/toolkit"
import userReducer from "~/app/features/userSlice"

export const store = configureStore({
  reducer: userReducer,
});

// configureStoreとは？
// 最初から処理の流れが理解できない
// Storeが内包するSliceで、State, Reducer, Action Creatorの3つを内包可能.
