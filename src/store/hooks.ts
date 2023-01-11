import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./configureStore";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;