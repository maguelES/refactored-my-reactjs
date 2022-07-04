import React from "react";
import PropTypes from "prop-types";
import {Dialog} from '@headlessui/react'

export const MarketCreateModal = ({isOpen, setIsOpen}) => {

    const onCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50">

            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-8">

                    <Dialog.Title>Deactivate account</Dialog.Title>
                    <Dialog.Description>
                        This will permanently deactivate your account
                    </Dialog.Description>

                    <p>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>

                    <button onClick={onCloseModal}>Cancel</button>
                </Dialog.Panel>
            </div>

        </Dialog>
    );
}

MarketCreateModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
}