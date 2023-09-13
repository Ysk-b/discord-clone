import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

// useDispatchと同義のuseAppDispatch(カスタムフック)に
// () => AppDispatchとして型定義を行う
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;