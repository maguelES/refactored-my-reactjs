import {TradePublicList} from "../../../features/trade/components/public/TradePublicList";
import React from "react";
import {PrimaryLayoutHeader} from "./PrimaryLayoutHeader";

class PrimaryLayout extends React.Component {
    render() {
        return (
            <div>
                <PrimaryLayoutHeader/>
                <TradePublicList/>
            </div>
        )


    }
}

export default PrimaryLayout;