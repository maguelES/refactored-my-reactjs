import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tradeListStore from "../features/trade/logic/store/tradeListStore";

export default configureStore({
    reducer: {
        counter: counterReducer,
        tradeList: tradeListStore
    },
});
