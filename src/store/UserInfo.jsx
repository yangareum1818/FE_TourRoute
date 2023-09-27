// countSlice.jsx

import { createSlice } from '@reduxjs/toolkit';
export const UserInfo = createSlice({
	name: 'info',
	initialState: { user: null },
	reducers: {
		Info: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { Info } = UserInfo.actions;
export default UserInfo.reducer;
