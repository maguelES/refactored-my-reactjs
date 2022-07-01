import React from "react";
import {useSelector} from "react-redux";
import {
    selectTradeListDescription,
    selectTradeListSubtitle,
    selectTradeListTitle
} from "../../logic/store/tradeListSlice";
import {MarketItemCard} from "../public/MarketItemCard";

export function MarketPage() {
    const title = useSelector(selectTradeListTitle);
    const subtitle = useSelector(selectTradeListSubtitle)
    const desc = useSelector(selectTradeListDescription);

    return (
        <div className="flex flex-col flex-auto">
            <div className={"self-start"}><h1 className="text-3xl font-bold text-gray-900 mb-5">Market</h1></div>
            <div className="flex">
                <div className="grid lg:grid grid-cols-2 grid-rows-2 items-center items-center gap-4">
                    <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
                    <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
                    <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
                </div>
            </div>
        </div>
    );
}
