import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {BaseRouter} from "./app/config/route/BaseRouter";
import {PrimaryLayoutHeader} from "./app/layout/primary/PrimaryLayoutHeader";
import {MarketPage} from "./features/trade/components/market/MarketPage";
import {UserDashboardPage} from "./features/dashboard/components/UserDashboardPage";

export const routes = [
    {
        path: "/",
        exact: true,
        component: UserDashboardPage,
    },
    {
        path: "/market",
        component: MarketPage,
    },
];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <PrimaryLayoutHeader/>
                    <section className="flex pt-3 p-5">
                        <Switch>
                            {routes.map((route, i) => (
                                <BaseRouter key={i} {...route} />
                            ))}
                        </Switch>
                    </section>
                </Router>
            </div>
        );
    }
}

export default App;

