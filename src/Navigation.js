// Navigation Component...!

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/"> Home </Link>
            <br />
            <Link to="/todo-list"> Todo List App </Link>
            <br />
            <Link to="/stop-watch"> Stop Watch App </Link>
            <br />
            <Link to="/timer"> Timer App </Link>
            <br />
            <Link to="/bidding-game"> Bidding Game </Link>
            <br />
            <Link to="/ludo-game"> Ludo Game </Link>
            <br />
            <Link to="/card-flip-game"> Card Flip Game </Link>
            <br />
            <Link to="/counter"> Counter App </Link>
            <br />
            <Link to="/search-filter"> Search Filter App </Link>
        </div>
    );
}

export default Navigation;