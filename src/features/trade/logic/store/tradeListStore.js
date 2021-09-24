import {createSlice} from "@reduxjs/toolkit";

export const tradeListStore = createSlice({
    name: "tradeList",
    initialState: {
        title: "Case Study II",
        subtitle: "",
        description: ""
    },
    reducers: {}
})

export const selectTradeListTitle = state => state.tradeList.title;

export default tradeListStore.reducer;