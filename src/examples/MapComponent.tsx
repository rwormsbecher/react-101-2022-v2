export const MapComponent = () => {
    const numbers = [1, 2, 3, 4];
    const filteredNumbers = numbers.map((num: number, index: number) => {
        if (index < 3) {
            return num;
        }
    });

    console.log("original numbers", numbers);
    console.log("filteredNumbers", filteredNumbers);

    return <div>MapComponent</div>;
};
