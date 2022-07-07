import React from "react";
import {TrashIcon} from "@heroicons/react/outline";
import {useSelector} from "react-redux";
import {selectTradeList} from "../../logic/store/tradeListSlice";

export const MarketItemTable = () => {

    const items = useSelector(selectTradeList);
    console.log(items);

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Sub-Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>

                {
                    items.map(item => {
                        return (
                            <tr className="bg-white border-b" key={item.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4">
                                    {item.subtitle}
                                </td>
                                <td className="px-6 py-4">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <TrashIcon className={"h-5 w-5"}/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

    );
}