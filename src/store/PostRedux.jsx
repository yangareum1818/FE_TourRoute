// countSlice.jsx

import { createSlice } from '@reduxjs/toolkit';
export const PostRedux = createSlice({
	name: 'plan',
	initialState: { tourlocation: '', tourdate: '', count: 1, human: [] },
	reducers: {
		plus: state => {
			state.value += 1;
		},
		minus: state => {
			state.value -= 1;
		},
		tour: (state, action) => {
			state.tourlocation = action;
			state.tourdate = action;
			state.count = action;
			state.human.push(action);
		},
	},
});

export const { tour } = PostRedux.actions;
export default PostRedux.reducer;
