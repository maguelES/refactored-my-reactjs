import React from "react";
import PropTypes from "prop-types";
import {Dialog, Transition} from "@headlessui/react";

export const AppSuccessModal = ({isOpen, setIsOpen, title}) => {
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
                    <Dialog.Panel className="mx-auto max-w-sm rounded bg-white px-9 py-6 container">

                        <Dialog.Title className={"mb-5 text-2xl font-semibold text-gray-700"}>{title}</Dialog.Title>

                        <div className={"mb-10"}>

                        </div>

                    </Dialog.Panel>
                </div>

            </Dialog>
        </Transition>

    );
}

AppSuccessModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    title: PropTypes.string
}
