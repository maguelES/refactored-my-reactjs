import React, {useState} from "react";
import {Tab} from '@headlessui/react'
import {useHistory, useLocation} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const PersonalPageTab = () => {

    const router = useHistory();
    const location = useLocation();
    const [selectedIndex] = useState(() => {
        switch (location.pathname) {
            case "/personal":
                return 0;
            case "/personal/settings":
                return 1;
            default:
                return 2;

        }
    });

    const [categories] = useState([
        {
            id: 1,
            title: "Profile",
            url: ""
        },
        {
            id: 2,
            title: "Settings",
            url: "settings"
        },
        {
            id: 3,
            title: "Notifications",
            url: "notifications"
        }
    ])

    const handleOnChange = (index) => {
        switch (index) {
            case 0:
                router.push("/personal");
                break;
            case 1:
                router.push("/personal/settings");
                break;
            default:
                router.push("/personal/notifications");
                break;

        }
    };

    return (
        <div className={"max-w-md"}>
            <Tab.Group vertical onChange={handleOnChange} selectedIndex={selectedIndex}>
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