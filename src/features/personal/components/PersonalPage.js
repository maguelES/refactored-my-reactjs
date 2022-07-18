import React, {useEffect, useState} from "react";
import {PersonalPageTab} from "./PersonalPageTab";
import {PersonalPageProfile} from "./PersonalPageProfile";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";

export function PersonalPage({history}) {

    const [page, setPage] = useState("profile");
    console.log(page);

    useEffect(() => {
        return () => {

            history.listen((loc) => {
                console.log(loc.pathname);
                switch (loc.pathname) {
                    case "/personal":
                        console.log("Base Personal");
                        setPage("profile");
                        break;
                    default:
                        setPage("settings");
                        break;
                }
            })
        };
    }, []);


    return (
        <div className="flex flex-col flex-grow">
            <div className="mb-5 self-start flex-shrink-1">
                <span className="text-3xl font-bold text-gray-900">
                Personal
                </span>
            </div>

            <div className={"flex flex-col md:flex-row gap-10"}>
                <PersonalPageTab/>

                <Switch>
                    <Route exact path={"/personal"}>
                        <div className="flex bg-white shadow rounded-lg mt-2 ml-3 flex-grow max-w-6xl self-center">
                            {/*<span className="text-lg font-bold text-gray-800">User&apos;s Name</span>*/}
                            <PersonalPageProfile/>
                        </div>
                    </Route>

                    <Route path={"/personal/settings"}>
                        <div className="flex bg-white shadow rounded-lg mt-2 ml-3 flex-grow max-w-6xl self-center">
                            <span> Hehe </span>
                        </div>
                    </Route>
                </Switch>

            </div>
        </div>
    );
}

PersonalPage.propTypes = {
    history: PropTypes.any
}
