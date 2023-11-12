import { createSlice } from '@reduxjs/toolkit';
export const TourResult = createSlice({
	name: 'result',
	initialState: { Result: null },
	reducers: {
		result: (state, action) => {
			state.Result = action.payload;
		},
	},
});

export const { result } = TourResult.actions;
export default TourResult.reducer;
