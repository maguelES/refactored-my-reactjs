import React from "react";
import { Transition } from '@headlessui/react'

export function AboutPage() {

    return (
        <Transition
            as="div"
            appear={true} //THIS will make the transition run everytime the component is rendered
            show={true}
            enter="transition-opacity duration-25"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="flex flex-col flex-grow justify-items-start"
        >

            <div className="mb-5 self-start flex-shrink-1">
                <span className="text-3xl font-bold text-gray-900">
                About Us
                </span>
            </div>

            <div className="flex flex-col bg-white drop-shadow-md px-5 py-4 rounded-md mt-2 mx-1 flex-grow">
                <div className="bg-violet-50 mt-5 flex flex-col rounded-md p-4">
                    <span className="text-3xl font-extrabold text-slate-900">Need a market?</span>
                    <span className="text-3xl font-extrabold text-slate-900">We have compiled it for you!</span>
                </div>

                <div className="grid grid-cols-2 mt-5 px-6">
                    <div className="md:container md:mx-auto">
                        <span className="font-bold">Our Story</span>
                    </div>
                    <div className="md:container md:mx-auto">
                        <span className="font-bold">Achievement</span>
                    </div>
                </div>
            </div>
        </Transition>
    );
}