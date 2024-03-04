// Named import
import React from 'react';
import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-md"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
};

// higher order component

// input restrauntccard => restrauntcardpromoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <div>
                    <label htmlFor="" className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                    <RestaurantCard {...props} />
                </div >
            </>
        )
    }
}

export default RestaurantCard