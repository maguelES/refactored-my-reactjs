import React from "react";

export function AboutPage() {

    return (
        <div className="flex flex-col flex-grow justify-items-start">
            <div className="mb-5 self-start flex-shrink-1">
                <span className="text-3xl font-bold text-gray-900">
                About Us
                </span>
            </div>

            <div className="flex flex-col bg-white drop-shadow-md px-5 py-4 rounded-md mt-5 mx-1 flex-grow">
                <div className="mx-auto mt-5 flex flex-col">
                    <span className="text-3xl font-extrabold text-slate-900">Need a market?</span>
                    <span className="text-3xl font-extrabold text-slate-900">We have compiled it for you!</span>
                </div>

                <div className="bg-violet-50 mt-5 rounded-md">
                    <span>Test2</span>
                </div>
            </div>
        </div>
    );
}