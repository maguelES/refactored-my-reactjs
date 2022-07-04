import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectTradeList,
    tradeItemAdded, tradeItemDeleted
} from "../../logic/store/tradeListSlice";
import {MarketItemCard} from "../public/MarketItemCard";
import {nanoid} from "@reduxjs/toolkit";

export function MarketPage() {

    const dispatch = useDispatch();
    const onAddItemClicked = () => {

        dispatch(
            tradeItemAdded({
                id: nanoid(),
                header: "Case Study IV",
                subHeader: "Finding customers might not be a new business after all..",
                description: "Getting business yadaa yadaa daa"
            })
        );
    }

    const onDelItemClicked = () => {
        dispatch(tradeItemDeleted());
    }

    const items = useSelector(selectTradeList);
    const tradeItems = items.map(item => (
        <MarketItemCard key={item.id} title={item.title} subtitle={item.subtitle} desc={item.description}/>
    ));

    return (
        <div className="flex flex-col flex-auto">
            <div className={"self-start"}><h1 className="text-3xl font-bold text-gray-900 mb-5">Market</h1></div>
            <section className={"self-start"}>
                <form>
                    <button type={"button"} className={"text-white bg-indigo-600 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"} onClick={onAddItemClicked}>
                        Save Post
                    </button>
                    <button type={"button"} className={"text-indigo-600 rounded-lg bg-white text-sm px-5 py-2.5 mr-2 mb-2 border border-gray-200"} onClick={onDelItemClicked}>
                        Delete
                    </button>
                </form>
            </section>
            <div className="flex">
                <div className="grid lg:grid grid-cols-2 grid-rows-2 items-center items-center gap-4">
                    {tradeItems}
                </div>
            </div>
        </div>
    );
}
