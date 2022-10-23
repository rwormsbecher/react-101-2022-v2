import React from "react";

export const FilterComponent = () => {
    const fruits = ["Apple", "Banana", "Pear", "Lychee"];
    const unorderedArray = ["Apple", "Tv", "Banana", "House", "Sky", "Lychee"];

    const listOfFruitsArray = unorderedArray.filter((item: string) => {
        if (fruits.includes(item)) {
            return item;
        }
    });

    console.log("list of fruits", listOfFruitsArray);

    return <div>FilterComponent</div>;
};
