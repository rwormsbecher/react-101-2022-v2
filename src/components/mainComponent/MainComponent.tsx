import React from "react";
import { ICity } from "../../models/ICity";

interface IMainComponentProps {
    selectedCityObject: ICity;
}

export const MainComponent = (props: IMainComponentProps) => {
    let cityDetails = null;

    if (Object.keys(props?.selectedCityObject).length > 0) {
        cityDetails = (
            <>
                <h3>{props?.selectedCityObject?.cityName}</h3>
                <img src={`/images/${props?.selectedCityObject?.cityName?.toString()}.jpg`} alt="Scenery of city" />
                <p>{props?.selectedCityObject?.summary}</p>
            </>
        );
    }
    return <main className="col-8">{cityDetails}</main>;
};
