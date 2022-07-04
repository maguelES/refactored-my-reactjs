import {createSlice} from "@reduxjs/toolkit";

export const tradeListSlice = createSlice({
    name: "tradeList",
    initialState: {
        title: "Case Study IV",
        subtitle: "Finding customers might not be a new business after all..",
        description: "Getting business yadaa yadaa daa"
    },
    reducers: {
        tradeItemAdded(state, action) {
            state.title = action.payload.header;
            state.subtitle = action.payload.subHeader;
            state.description = action.payload.description;
        }
    }
})

export const selectTradeListTitle = state => state.tradeList.title;
export const selectTradeListSubtitle = state => state.tradeList.subtitle;
export const selectTradeListDescription = state => state.tradeList.description;

export const { tradeItemAdded } = tradeListSlice.actions

export default tradeListSlice.reducer;