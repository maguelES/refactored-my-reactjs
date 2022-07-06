import React from "react";
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';

import {AnnotationIcon, CalendarIcon, DotsHorizontalIcon, TrashIcon} from "@heroicons/react/outline";
import {TruckIcon} from "@heroicons/react/solid";
import {tradeItemDeletedById} from "../../logic/store/tradeListSlice";

export function MarketItemCard({desc, subtitle, title, id}) {

    const currentDate = new Date();
    const dispatch = useDispatch();

    return (
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
            <div className="md:flex-col">
                <div className={"flex mx-4 my-4"}>

                    <div className={"ml-2 flex rounded-full bg-gray-100 p-2"}>
                        <TruckIcon className={"h-6 w-6 text-pink-600"}></TruckIcon>
                    </div>

                    <div className={"flex gap-1 ml-auto"}>
                        <button type={"button"} className={"text-gray-500 hover:bg-gray-200 p-2 rounded-lg"}
                                onClick={() => {
                                    dispatch(tradeItemDeletedById({id: id}));
                                }}>
                            <TrashIcon className={"h-5 w-5 "}/>
                        </button>
                        <button type={"button"} className={"text-gray-500 hover:bg-gray-200 p-2 rounded-lg"}>
                            <DotsHorizontalIcon className={"h-5 w-5 text-gray-500"}/>
                        </button>
                    </div>
                </div>

                <div className="px-8 py-6 md:text-left">
                    <div className="uppercase tracking-wide text-lg text-gray-800-500 font-bold">{title}</div>
                    <p className="mt-1 leading-tight text-gray-500">{subtitle}</p>
                </div>

                <div className={"flex-col px-8 mt-3 mb-8"}>
                    <div className={"flex"}>
                        <AnnotationIcon className={"text-gray-600 h-6 w-6"}/>
                        <span className={"ml-3 text-gray-500"}>Status: Active</span>
                    </div>

                    <div className={"flex mt-3"}>
                        <CalendarIcon className={"text-gray-600 h-6 w-6"}/>
                        <span className={"ml-3 text-gray-500"}>Date: {currentDate.toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

MarketItemCard.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.any
}