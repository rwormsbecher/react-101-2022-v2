import React, { useEffect, useState } from "react";

export const UseEffectComponent = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");

    useEffect(() => {
        console.log("The name variable is:", name);
    }, []);

    useEffect(() => {
        console.log("Now name is ", name);
    }, [name]);

    useEffect(() => {
        console.log("Now the age is", age);
    }, [age]);

    useEffect(() => {
        if (age && name) {
            console.log("You are: ", `${name} ${age}`);
        }
    }, [age, name]);

    return (
        <div>
            Name <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            Age <input type="text" onChange={(e) => setAge(e.target.value)} />
        </div>
    );
};
