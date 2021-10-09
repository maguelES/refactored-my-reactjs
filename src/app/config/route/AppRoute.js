import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {TradePublicList} from "../../../features/trade/components/public/TradePublicList";
import {BaseRouter} from "./BaseRouter";
import {PrimaryLayoutHeader} from "../../layout/primary/PrimaryLayoutHeader";

const routes = [
    {
        path: "/",
        component: TradePublicList,
        routes: [
            {
                path: "/test",
                component: TradePublicList,
            }
        ]
    },
];

export function AppRoute() {
    return (
        <Router>
            <PrimaryLayoutHeader/>
            <Switch>
                {routes.map((route, i) => (
                    <BaseRouter key={i} {...route} />
                ))}
            </Switch>
        </Router>
    )
}