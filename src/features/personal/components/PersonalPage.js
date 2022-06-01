import React from "react";

export function PersonalPage() {
    return (
        <div className="flex-col flex-grow justify-items-start">
            <div className="mb-5 self-start flex-shrink-1">
                <span className="text-3xl font-bold text-gray-900">
                Personal
                </span>
            </div>

            <div className="flex bg-white drop-shadow-md px-5 py-4 rounded-md mt-5 mx-5 flex-grow">
                <span className="text-lg font-bold text-gray-800">User&apos;s Name</span>
            </div>
        </div>
    );
}