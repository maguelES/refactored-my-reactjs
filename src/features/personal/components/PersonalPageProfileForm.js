import React from "react";

export const PersonalPageProfileForm = () => {
    return (
        <form className={"grid grid-cols-1 gap-6 justify-items-start mx-5 my-5"}>
            <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder=""/>
            </label>
            <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder=""/>
            </label>
        </form>
    );
}