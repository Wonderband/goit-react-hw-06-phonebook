import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = { fltr: ''};
const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            state.fltr = action.payload;            
        }
    }
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;