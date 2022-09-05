import React, {useState} from "react";

export const PersonalPageProfileForm = () => {

    const [countries] = useState([
        {id: 0, text: "Malaysia", value: 1},
        {id: 1, text: "Indonesia", value: 2}
    ]);

    return (
        <div>
            <form action="#" method="POST">
                <div className="px-4 py-5 bg-white sm:p-6">
                    {/* FIrst Name*/}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-12">
                            <label htmlFor="first-name" className="block text-left text-sm font-medium text-gray-700">First
                                name</label>
                            <input type="text" name="first-name" id="first-name"
                                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                    </div>

                    {/* Last Name*/}
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="col-span-12">
                            <label htmlFor="last-name" className="block text-left text-sm font-medium text-gray-700">Last
                                name</label>
                            <input type="text" name="last-name" id="last-name"
                                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                    </div>

                    {/* Country */}
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="col-span-12">
                            <label htmlFor="country"
                                   className="block text-left text-sm font-medium text-gray-700">Country</label>
                            <select name="country" id="country"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                {
                                    countries.map(value => {
                                        return <option key={value.id}>{value.text}</option>
                                    })
                                }

                            </select>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="col-span-12">
                            <label htmlFor="bio" className="block text-left text-sm font-medium text-gray-700">Bio</label>
                            <textarea name="bio" id="bio"
                                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                    </div>



                </div>
            </form>
        </div>
    );
}