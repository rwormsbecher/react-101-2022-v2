import React, { Dispatch, SetStateAction, useEffect } from "react";
import { ICity } from "../../models/ICity";
import cities from "../../assets/data/bootcamps.json";

interface ISidebarComponentsProps {
    selectedCityHandler: Dispatch<SetStateAction<ICity>>;
    currentSelectedCity: ICity;
}

export const SidebarComponent = (props: ISidebarComponentsProps) => {
    useEffect(() => {
        props?.selectedCityHandler(cities?.bootcampCities[0]);
    }, []);

    const cityListItems = cities.bootcampCities.map((city: ICity) => {
        let activeClass = props?.currentSelectedCity?.id === city?.id ? "active-city" : "";

        return (
            <li onClick={() => props.selectedCityHandler(city)} key={city.cityName} className={activeClass}>
                {city.cityName}
            </li>
        );
    });

    return (
        <aside className="col-4 sidebar">
            <ul>{cityListItems}</ul>
        </aside>
    );
};
