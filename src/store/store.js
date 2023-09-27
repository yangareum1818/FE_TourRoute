import { configureStore } from '@reduxjs/toolkit';
import { PostRedux } from './PostRedux';
import { UserInfo } from './UserInfo';
export const store = configureStore({
	reducer: {
		Tour: PostRedux.reducer,
		Info: UserInfo.reducer,
	},
});
export default store;
