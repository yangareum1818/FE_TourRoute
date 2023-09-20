import { configureStore } from '@reduxjs/toolkit';
import { PostRedux } from './PostRedux';
export const store = configureStore({
	reducer: PostRedux,
});
export default store;
