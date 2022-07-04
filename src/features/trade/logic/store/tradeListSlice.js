import {createSlice} from "@reduxjs/toolkit";

export const tradeListSlice = createSlice({
    name: "tradeList",
    initialState: {
        list: [
            {
                id: 1,
                title: "Case Study IV",
                subtitle: "Finding customers might not be a new business after all..",
                description: "Getting business yadaa yadaa daa"
            },
            {
                id: 2,
                title: "Case Study IV",
                subtitle: "Finding customers might not be a new business after all..",
                description: "Getting business yadaa yadaa daa"
            },
            {
                id: 3,
                title: "Case Study IV",
                subtitle: "Finding customers might not be a new business after all..",
                description: "Getting business yadaa yadaa daa"
            }
        ]
    },
    reducers: {
        tradeItemAdded(state, action) {
            state.list.push({
                title: action.payload.header,
                subtitle: action.payload.subHeader,
                description: action.payload.description,
            })
        }
    }
})

export const selectTradeList = state => state.tradeList.list;

export const {tradeItemAdded} = tradeListSlice.actions

export default tradeListSlice.reducer;