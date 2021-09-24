import {TradePublicList} from "../../../features/trade/components/public/TradePublicList";
import React from "react";
import {PrimaryLayoutHeader} from "./PrimaryLayoutHeader";

export function PrimaryLayout() {
    return (
        <div>
            <PrimaryLayoutHeader/>
            <TradePublicList/>
        </div>
    )
}