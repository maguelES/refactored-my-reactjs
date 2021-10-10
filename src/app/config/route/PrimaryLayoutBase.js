import React from "react";
import { Switch} from "react-router-dom";
import {BaseRouter} from "./BaseRouter";
import {PrimaryLayoutHeader} from "../../layout/primary/PrimaryLayoutHeader";
import {routes} from "../../../App";


export function PrimaryLayoutBase() {
    return (
            <Switch>
                <PrimaryLayoutHeader/>
                {routes.map((route, i) => (
                    <BaseRouter key={i} {...route} />
                ))}
            </Switch>
    )
}