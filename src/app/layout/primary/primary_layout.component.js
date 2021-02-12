import {TradePublicList} from "../../../features/trade/components/public/trade_public_list.component";
import React from "react";
import {PrimaryLayoutHeader} from "./primary_layout_header.component";

export function PrimaryLayout() {
    return (
        <div>
            <PrimaryLayoutHeader/>
            <TradePublicList/>
        </div>
    )
}