import React from "react";
import {Menu} from '@headlessui/react'

export function PrimaryLayoutUserIcon() {
    return (
        <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
                <Menu as={"div"} className="ml-3 relative">
                    <div>
                        <Menu.Button
                            className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            id="user-menu" aria-haspopup="true">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full"
                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                        </Menu.Button>
                    </div>
                    <Menu.Items
                        className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                        <div className={"px-1 py-1"}>

                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        className={`${
                                            active ? 'bg-gray-100 text-gray-700' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md  px-4 py-2`}
                                    >
                                        Your Profile
                                    </button>
                                )}
                            </Menu.Item>

                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        className={`${
                                            active ? 'bg-gray-100 text-gray-700' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md  px-4 py-2`}
                                    >
                                        Sign Out
                                    </button>
                                )}
                            </Menu.Item>

                        </div>

                    </Menu.Items>
                </Menu>
            </div>
        </div>
    );
}