import React from "react";
import {useSelector} from "react-redux";
import {
    selectTradeListDescription,
    selectTradeListSubtitle,
    selectTradeListTitle
} from "../../logic/store/tradeListStore";

export function TradePublicList() {
    const title = useSelector(selectTradeListTitle);
    const subtitle = useSelector(selectTradeListSubtitle)
    const desc = useSelector(selectTradeListDescription);

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex mb-5">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48"
                         src="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                         alt="Man looking at item at a store"/>
                </div>
                <div className="p-8 md:text-left">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <a href="#"
                       className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
                    <p className="mt-2 text-gray-500">{desc}</p>
                </div>
            </div>
        </div>

    )
}