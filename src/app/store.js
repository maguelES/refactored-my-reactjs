import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tradeListReducer from "../features/trade/logic/store/tradeListSlice";
import personalProfileReducer from "../features/personal/data/slices/personalProfileSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        tradeList: tradeListReducer,
        personalProfile: personalProfileReducer
    },
});
