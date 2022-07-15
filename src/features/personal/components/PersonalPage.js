import React from "react";
import {PersonalPageTab} from "./PersonalPageTab";

export function PersonalPage() {
    return (
        <div className="flex flex-col flex-grow justify-items-start">
            <div className="mb-5 self-start flex-shrink-1">
                <span className="text-3xl font-bold text-gray-900">
                Personal
                </span>
            </div>

            <div className={"flex gap-10"}>
                <PersonalPageTab/>

                <div className="flex bg-white shadow px-5 py-4 rounded-md mt-2 ml-3 flex-grow">
                    <span className="text-lg font-bold text-gray-800">User&apos;s Name</span>
                </div>
            </div>
        </div>
    );
}