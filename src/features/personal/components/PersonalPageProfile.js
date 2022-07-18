import React from "react";

export const PersonalPageProfile = () => {
    return (
        <div className={"flex flex-col min-w-full"}>
            <div className={"flex flex-col rounded-lg"}>
                <div className={"hidden md:block h-36 bg-gradient-to-r from-violet-500 to-fuchsia-500"}>
                </div>

                {/* Profile Image & Action Button */}
                <div className={"flex flex-col md:flex-row"}>
                    <div className={" my-4 ml-8 w-24 h-24"}>
                        <img className={"border border-gray-50 rounded-full shadow object-fill"}
                             src={"https://randomuser.me/api/portraits/men/85.jpg"} alt={"Here here"}/>
                    </div>

                    <div className={"flex flex-col ml-8 mt-2 md:mt-8 place-items-start"}>
                        <span className={"text-gray-700 font-bold text-2xl"}>Profile</span>
                        <span className={"mt-1 text-gray-500/200"}>Update your photo and personal details</span>
                    </div>

                    <div className={"ml-auto mt-2 md:mt-8 mr-3 md:mr-6"}>
                        <button
                            className={"bg-white text-gray-700 border border-gray-300 font-semibold rounded rounded-lg px-3 py-2 mr-3"}>
                            Cancel
                        </button>
                        <button className={"bg-indigo-600/90 text-white font-semibold rounded rounded-lg px-3 py-2"}>
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}