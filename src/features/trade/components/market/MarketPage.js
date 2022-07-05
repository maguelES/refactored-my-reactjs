import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectTradeList, tradeItemDeleted
} from "../../logic/store/tradeListSlice";
import {MarketItemCard} from "../public/MarketItemCard";
import {MarketCreateModal} from "./MarketCreateModal";

export function MarketPage() {

    const [isModalOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const onOpenModalClicked = () => {
        setIsOpen(!isModalOpen);
    }

    const onDelItemClicked = () => {
        dispatch(tradeItemDeleted());
    }

    const items = useSelector(selectTradeList);
    const tradeItems = items.map(item => (
        <MarketItemCard className={"container"} key={item.id} title={item.title} subtitle={item.subtitle} desc={item.description}/>
    ));

    return (
        <div className="flex flex-col flex-auto">

            <MarketCreateModal isOpen={isModalOpen} setIsOpen={setIsOpen}/>

            <div className={"self-start"}><h1 className="text-3xl font-bold text-gray-900 mb-5">Your Store</h1></div>
            <section className={"self-start mb-5"}>
                <form>
                    <button type={"button"} className={"text-white bg-indigo-600 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"} onClick={onOpenModalClicked}>
                        Create
                    </button>
                    <button type={"button"} className={"text-indigo-600 rounded-lg bg-white text-sm px-5 py-2.5 mr-2 mb-2 border border-gray-200"} onClick={onDelItemClicked}>
                        Delete
                    </button>
                </form>
            </section>
            <div className="grid lg:grid sm:grid-cols-1 lg:grid-cols-4 items-center items-center gap-4">
                {tradeItems}
            </div>
        </div>
    );
}
