import {createSlice} from "@reduxjs/toolkit";

export const personalProfileSlice = createSlice({
    name: "personalProfile",
    initialState: {
        isBusy: false,
    },
    reducers: {
        profileFirstNameChange(state, action) {
            console.log("Payload: ", action.payload.firstName)
            state.firstName = action.payload.firstName;
        }
    }
})

export const selectPersonalProfileBusy = state => state.personalProfile.isBusy;

export const {profileFirstNameChange} = personalProfileSlice.actions;

export default personalProfileSlice.reducer;