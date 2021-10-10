import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {BaseRouter} from "./app/config/route/BaseRouter";
import {PrimaryLayoutBase} from "./app/config/route/PrimaryLayoutBase";
import {TradePublicList} from "./features/trade/components/public/TradePublicList";
import {MarketItemCard} from "./features/trade/components/public/MarketItemCard";

export const routes = [
    {
        path: "",
        component: PrimaryLayoutBase,
        routes: [
            {
                path: "home",
                component: TradePublicList,
            },
            {
                path: "market",
                component: MarketItemCard,
            }
        ]
    },
];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        {routes.map((route, i) => (
                            <BaseRouter key={i} {...route} />
                        ))}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

