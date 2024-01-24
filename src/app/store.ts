import { configureStore } from "@reduxjs/toolkit";

import api from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

console.log("root store called");

const rootStore = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(rootStore.dispatch);

type AppDispatch = typeof rootStore.dispatch;
type RootState = ReturnType<typeof rootStore.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootStore;
