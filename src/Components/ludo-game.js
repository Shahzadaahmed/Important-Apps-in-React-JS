// LudoGame Component...!

import React, { useState } from "react";

const LudoGame = () => {

    // Handling state here...!
    const [randomDice1, setRandomDice1] = useState(Math.floor(Math.random() * 6) + 1);
    const [randomDice2, setRandomDice2] = useState(Math.floor(Math.random() * 6) + 1);
    const [message, setMessage] = useState("Start Game")

    // Function to play the game...!
    const playGame = () => {
        
        // For Player 1...!
        let randomDice1Clone = randomDice1;
        randomDice1Clone = Math.floor(Math.random() * 6) + 1;
        setRandomDice1(randomDice1Clone);

        let dice1 = document.getElementById('Dice1');
        let player1 = require(`./Images/Dice Images/Dice${randomDice1}.PNG`);
        dice1.setAttribute("src", player1);

        // For Player 2...!
        let randomDice2Clone = randomDice2;
        randomDice2Clone = Math.floor(Math.random() * 6) + 1;
        setRandomDice2(randomDice2Clone);

        let dice2 = document.getElementById("Dice2");
        let player2 = require(`./Images/Dice Images/Dice${randomDice2}.PNG`);
        dice2.setAttribute("src", player2);

        if (randomDice1 > randomDice2) {
            setMessage('YahoO 🥰 Player 1 WON the Game!');
        }

        else if (randomDice1 < randomDice2) {
            setMessage('YahoO 🥰 Player 2 WON the Game!');
        }

        else if (randomDice1 === randomDice2) {
            setMessage("Game DRAW!");
        }
    }

    return (
        <div>
            <h1> Ludo Game in React JS </h1>
            <h2> {message} </h2>
            <hr />
            <div>
                <h2> Player 1 </h2>
                <img id="Dice1" alt="Dice" src={require('./Images/Dice Images/Dice1.PNG')} />
            </div>

            <div>
                <h2> Player 2 </h2>
                <img id="Dice2" alt="Dice" src={require('./Images/Dice Images/Dice6.PNG')} />
            </div>

            <hr />

            <button onClick={playGame}> Play </button>
        </div>
    );
}

export default LudoGame;

// App completed successfully...!