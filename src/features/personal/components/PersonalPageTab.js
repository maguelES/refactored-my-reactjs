import React, {useState} from "react";
import {Tab} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const PersonalPageTab = () => {

    let [categories] = useState([
        {
            id: 1,
            title: "Profile",
        },
        {
            id: 2,
            title: "Settings"
        },
        {
            id: 3,
            title: "Notifications"
        }
    ])

    return (
        <div className={" max-w-md"}>
            <Tab.Group vertical>
                <Tab.List className={"flex-column space-x-1 rounded-xl p-1"}>
                    {categories.map(cat => {
                        return (
                            <Tab
                                key={cat.id}
                                className={({selected}) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-gray-500 hover:bg-white/[0.12] hover:text-indigo-500'
                                    )
                                }
                            >
                                {cat.title}
                            </Tab>
                        )
                    })}

                </Tab.List>
            </Tab.Group>
        </div>
    );
}