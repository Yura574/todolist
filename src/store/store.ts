import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {todolistReducer} from "./reducers/todolistReducer";
import {taskReducer} from "./reducers/taskReducer";

const rootReducer = combineReducers({
    todolist: todolistReducer,
    tasks: taskReducer,
})
export const store = configureStore({
    reducer: rootReducer,
// middleware: getDefaultMiddleware => thun
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector