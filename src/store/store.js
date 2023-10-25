import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { PostRedux } from './PostRedux';
import { UserInfo } from './UserInfo';
import { TourResult } from './TourResult';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const persistConfig = {
	key: 'root', // reducer의 어느 지점에서부터 데이터를 저장할 건지
	storage: storage, //sessionStorage에 저장
	whitelist: ['Tour', 'Info'], // blacklist: 제외할 것 지정
};

const reducers = combineReducers({
	Tour: PostRedux.reducer,
	Info: UserInfo.reducer,
	Result: TourResult.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
	reducer: persistedReducer,
});
export default store;
