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
                id: action.payload.id,
                title: action.payload.header,
                subtitle: action.payload.subHeader,
                description: action.payload.description,
            })
        },

        tradeItemDeleted(state, action) {
            state.list.pop();
        },

        tradeItemDeletedById(state, action) {
            console.log("Payload: ", action.payload.id);

            const index = state.list.findIndex(element => element.id === action.payload.id);
            console.log("Index: ", index);
            state.list.splice(index, 1);
        }

    }
})

export const selectTradeList = state => state.tradeList.list;

export const {tradeItemAdded, tradeItemDeleted, tradeItemDeletedById} = tradeListSlice.actions

export default tradeListSlice.reducer;