// countSlice.jsx

import { createSlice } from '@reduxjs/toolkit';
export const PostRedux = createSlice({
	name: 'plan',
	initialState: { Tour: null },
	reducers: {
		tour: (state, action) => {
			state.Tour = action.payload;
		},
	},
});

export const { tour } = PostRedux.actions;
export default PostRedux.reducer;
