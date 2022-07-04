import React from "react";
import {useDispatch} from "react-redux";

import PropTypes from "prop-types";
import {Dialog, Transition} from '@headlessui/react'
import {tradeItemAdded} from "../../logic/store/tradeListSlice";
import {nanoid} from "@reduxjs/toolkit";

export const MarketCreateModal = ({isOpen, setIsOpen}) => {

    const onCloseModal = () => {
        setIsOpen(false);
    }

    const dispatch = useDispatch();
    const onAddItemClicked = () => {

        dispatch(
            tradeItemAdded({
                id: nanoid(),
                header: "Case Study IV",
                subHeader: "Finding customers might not be a new business after all..",
                description: "Getting business yadaa yadaa daa"
            })
        );
    }

    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50">

                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>

                <div className="fixed inset-0 flex items-center justify-center">
                    <Dialog.Panel className="mx-auto max-w-sm rounded bg-white px-9 py-6">

                        <Dialog.Title className={"mb-5 text-2xl font-bold text-gray-700"}>Create Trade
                            Item</Dialog.Title>

                        <div className={"mb-10"}>
                            <form>
                                <div className="mb-4">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="username">
                                        Title
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="username" type="text"></input>
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="password">
                                        SubTitle
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="password" type="text">
                                    </input>
                                    {/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="password">
                                        Description
                                    </label>
                                    <textarea
                                        className={"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}>

                                    </textarea>
                                    {/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
                                </div>
                            </form>
                        </div>

                        <button type={"button"}
                                className={"text-white bg-indigo-600 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"}
                                onClick={onAddItemClicked}>
                            Save
                        </button>

                        <button type={"button"}
                                className={"text-indigo-600 rounded-lg bg-white text-sm px-5 py-2.5 mr-2 mb-2 border border-gray-200"}
                                onClick={onCloseModal}>
                            Cancel
                        </button>
                    </Dialog.Panel>
                </div>

            </Dialog>
        </Transition>

    );
}

MarketCreateModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
}