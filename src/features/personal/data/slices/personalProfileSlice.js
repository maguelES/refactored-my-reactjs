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
        },

        profileLastNameChanged(state, action) {
            state.lastName = action.payload.lastName;
        },

        profileCountryChanged(state, action) {
            state.country = action.payload.country;
        },

        profileBioChanged(state, action) {
            state.bio = action.payload.bio;
        }
    }
})

export const selectPersonalProfileBusy = state => state.personalProfile.isBusy;

export const {
    profileFirstNameChange,
    profileLastNameChanged,
    profileCountryChanged,
    profileBioChanged
} = personalProfileSlice.actions;

export default personalProfileSlice.reducer;