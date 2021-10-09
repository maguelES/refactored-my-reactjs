import React from "react";
import {Router, Switch} from "react-router-dom";
import {TradePublicList} from "../../../features/trade/components/public/TradePublicList";
import {BaseRouter} from "./BaseRouter";

const routes = [
    {
        path: "/",
        component: TradePublicList
    },
];

export function AppRoute() {
    return (
        <Router>
            <Switch>
                {routes.map((route, i) => (
                    <BaseRouter key={i} {...route} />
                ))}
            </Switch>
        </Router>
    )
}