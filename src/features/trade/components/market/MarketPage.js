import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectTradeListDescription,
    selectTradeListSubtitle,
    selectTradeListTitle,
    tradeItemAdded
} from "../../logic/store/tradeListSlice";
import {MarketItemCard} from "../public/MarketItemCard";

export function MarketPage() {

    const dispatch = useDispatch();

    // Redux State
    const title = useSelector(selectTradeListTitle);
    const subtitle = useSelector(selectTradeListSubtitle)
    const desc = useSelector(selectTradeListDescription);

    const onAddItemClicked = () => {

        dispatch(
            tradeItemAdded({
                header: "Test Test Test",
                subHeader: "Test Omega Test Test. Houston, are you there?",
                description: "Yes, I am here."
            })
        );
    }

    return (
        <div className="flex flex-col flex-auto">
            <div className={"self-start"}><h1 className="text-3xl font-bold text-gray-900 mb-5">Market</h1></div>
            <section>
                <form>
                    <button type="button" onClick={onAddItemClicked}>
                        Save Post
                    </button>
                </form>
            </section>
            <div className="flex">
                <div className="grid lg:grid grid-cols-2 grid-rows-2 items-center items-center gap-4">
                    <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
                    <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
                    <MarketItemCard title={title} subtitle={subtitle} desc={desc}/>
                </div>
            </div>
        </div>
    );
}
