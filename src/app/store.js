import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tradeListReducer from "../features/trade/logic/store/tradeListSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        tradeList: tradeListReducer
    },
});
