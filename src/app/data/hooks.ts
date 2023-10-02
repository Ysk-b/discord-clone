import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useSelector } from 'react-redux';

// useSelector, useDispatchに対して、
// 型定義した上でカスタムフックを定義
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// useSelector, useDispatchをカスタムフックで定義 + 型定義