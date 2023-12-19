import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
    name: "picture",
    initialState: {
        pictures:null,
    },
    reducers:{
        setPictureData: (state, action) => {
            state.picture = action.payload;
        },
    },
});

export const {setPictureData} = picturesSlice.actions;
export default picturesSlice.reducer;