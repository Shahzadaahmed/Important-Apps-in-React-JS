// Counter Component...!

import React, { useState } from "react";

const Counter = () => {

    // Handeling state here...!
    const [count, setCount] = useState(0);

    // Function to increament counter...!
    const increament = () => {
        let countsClone = count;

        if (countsClone >= 10) {
            alert('Increament counts limit reached!');
        }

        else {
            countsClone++;
            setCount(countsClone);
        }
    }

    // Function to decreament counter...!
    const decreament = () => {
        let countsClone = count;

        if (countsClone <= 0) {
            alert('Decreament counts limit reached!');
        }

        else {
            countsClone--;
            setCount(countsClone);
        }
    }

    return (
        <div>
            <h1>  Counter App in React JS </h1>
            <hr />
            <h2> {count} </h2>
            <button onClick={increament}> + Increament </button>
            <button onClick={decreament}> - Decreament </button>
        </div>
    );
}

export default Counter;