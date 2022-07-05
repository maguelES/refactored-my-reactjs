import React from "react";
import PropTypes from 'prop-types';
import {DotsHorizontalIcon, TrashIcon} from "@heroicons/react/outline";

export function MarketItemCard({desc, subtitle, title}) {
    return (
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
            <div className="md:flex-col">
                <div className={"flex mx-4 my-4"}>
                    <div className={"flex gap-1 ml-auto"}>
                        <button type={"button"} className={"text-gray-500 hover:bg-gray-200 p-2 rounded-lg"}>
                            <TrashIcon className={"h-5 w-5 "}/>
                        </button>
                        <button type={"button"} className={"text-gray-500 hover:bg-gray-200 p-2 rounded-lg"}>
                            <DotsHorizontalIcon className={"h-5 w-5 text-gray-500"}/>
                        </button>
                    </div>
                </div>
                <div className="px-8 py-6 md:text-left">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <a href="#"
                       className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
                    <p className="mt-2 text-gray-500">{desc}</p>
                </div>
            </div>
        </div>
    );
}

MarketItemCard.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
}