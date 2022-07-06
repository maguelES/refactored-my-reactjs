import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectTradeList} from "../../logic/store/tradeListSlice";
import {MarketItemCard} from "../public/MarketItemCard";
import {MarketCreateModal} from "./MarketCreateModal";
import {ViewListIcon} from "@heroicons/react/outline";
import PropTypes from "prop-types";

export const MarketPage = (props) => {

    const [isModalOpen, setIsOpen] = useState(false);

    const onOpenModalClicked = () => {
        setIsOpen(!isModalOpen);
    }

    const items = useSelector(selectTradeList);
    const tradeItems = items.map(item => (
        <MarketItemCard
            className={"container"}
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.description}
            id={item.id}/>
    ));

    const query = new URLSearchParams(props.location.search);
    if (query)
        console.log("Test");

    return (
        <div className="flex flex-col flex-auto">

            <MarketCreateModal isOpen={isModalOpen} setIsOpen={setIsOpen}/>

            <div className={"self-start"}><h1 className="text-3xl font-bold text-gray-900 mb-5">Your Store</h1></div>
            <section className={"self-start mb-5"}>
                <form className={"flex justify-items-center"}>
                    <button type={"button"}
                            className={"text-white bg-indigo-600 rounded-lg text-sm px-5 py-2.5 mr-2"}
                            onClick={onOpenModalClicked}>
                        Create
                    </button>

                    <button type={"button"}
                            className={"text-white bg-indigo-50 rounded-lg text-sm p-2 mr-2"}>
                        <ViewListIcon className={"h-5 w-5 text-indigo-600"}/>
                    </button>

                </form>
            </section>

            <div className="grid lg:grid sm:grid-cols-1 lg:grid-cols-4 items-center items-center gap-4">
                {tradeItems}
            </div>
        </div>
    );
}

MarketPage.propTypes = {
    location: PropTypes.any
}
