import {createSlice} from "@reduxjs/toolkit";

export const personalProfileSlice = createSlice({
    name: "personalProfile",
    initialState: {
        isBusy: false,
    },
    reducers: {}
})

export const selectPersonalProfileBusy = state => state.personalProfile.isBusy;

export default personalProfileSlice.reducer;