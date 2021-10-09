import React from "react";
import {PrimaryLayoutHeader} from "./PrimaryLayoutHeader";
import {AppRoute} from "../../config/route/AppRoute";

class PrimaryLayout extends React.Component {
    render() {
        return (
            <div>
                <PrimaryLayoutHeader/>
                <AppRoute/>
            </div>
        )


    }
}

export default PrimaryLayout;