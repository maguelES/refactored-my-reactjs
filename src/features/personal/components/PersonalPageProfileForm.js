import React from "react";

export const PersonalPageProfileForm = () => {
    return (
        <div>
            <form action="#" method="POST">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-12">
                            <label htmlFor="first-name" className="block text-left text-sm font-medium text-gray-700">First
                                name</label>
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}