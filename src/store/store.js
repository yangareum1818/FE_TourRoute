import { configureStore } from '@reduxjs/toolkit';
import { PostRedux } from './PostRedux';
import { UserInfo } from './UserInfo';
import { TourResult } from './TourResult';
export const store = configureStore({
	reducer: {
		Tour: PostRedux.reducer,
		Info: UserInfo.reducer,
		Result: TourResult.reducer,
	},
});
export default store;
