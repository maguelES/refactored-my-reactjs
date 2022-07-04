import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectTradeList,
    tradeItemAdded
} from "../../logic/store/tradeListSlice";
import {MarketItemCard} from "../public/MarketItemCard";

export function MarketPage() {

    const dispatch = useDispatch();
    const onAddItemClicked = () => {

        dispatch(
            tradeItemAdded({
                header: "Case Study IV",
                subHeader: "Finding customers might not be a new business after all..",
                description: "Getting business yadaa yadaa daa"
            })
        );
    }

    const items = useSelector(selectTradeList);
    const tradeItems = items.map(item => (
        <MarketItemCard key={item.id} title={item.title} subtitle={item.subtitle} desc={item.description}/>
    ));

    return (
        <div className="flex flex-col flex-auto">
            <div className={"self-start"}><h1 className="text-3xl font-bold text-gray-900 mb-5">Market</h1></div>
            <section>
                <form>
                    <button type="button" onClick={onAddItemClicked}>
                        Save Post
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
