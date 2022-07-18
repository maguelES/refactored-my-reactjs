import React, {useState} from "react";
import {PersonalPageTab} from "./PersonalPageTab";
import {PersonalPageProfile} from "./PersonalPageProfile";

export function PersonalPage() {

    const [page] = useState("profile");
    console.log(page);

    return (
        <div className="flex flex-col flex-grow">
            <div className="mb-5 self-start flex-shrink-1">
                <span className="text-3xl font-bold text-gray-900">
                Personal
                </span>
            </div>

            <div className={"flex flex-col md:flex-row gap-10"}>
                <PersonalPageTab/>

                <div className="flex bg-white shadow rounded-lg mt-2 ml-3 flex-grow max-w-6xl self-center">
                    {/*<span className="text-lg font-bold text-gray-800">User&apos;s Name</span>*/}
                    <PersonalPageProfile/>
                </div>
            </div>
        </div>
    );
}