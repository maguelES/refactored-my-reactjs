import React from "react";
import {useSelector} from "react-redux";
import {
    selectTradeListDescription,
    selectTradeListSubtitle,
    selectTradeListTitle
} from "../../logic/store/tradeListStore";
import {MarketItemCard} from "./MarketItemCard";

export function TradePublicList() {
    const title = useSelector(selectTradeListTitle);
    const subtitle = useSelector(selectTradeListSubtitle)
    const desc = useSelector(selectTradeListDescription);

    return (
        <div>

            <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
            <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
            <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
        </div>
    )
}