// Card Flip Game Component...!

import React, { Component } from "react";
import BacksideCard from "./Images/Card Images/Backside.png"
import KingCard from "./Images/Card Images/King.png";
import QueenCard from "./Images/Card Images/Queen.png";

class CardFlipGame extends Component {

    // Handleing states here...!
    state = {
        isPlaying: false,
        randomNumber: Math.floor(Math.random() * 3) + 1,
        message: undefined
    }

    // Function to play the game...!
    play = (cardIndex) => {
        if (!this.state.isPlaying) {
            let randomNumberClone = this.state.randomNumber;
            randomNumberClone = Math.floor(Math.random() * 3) + 1;
            this.setState({
                randomNumber: randomNumberClone
            });

            let card1 = document.getElementById("card1");
            let card2 = document.getElementById("card2");
            let card3 = document.getElementById("card3");

            if (randomNumberClone === 1) {
                card1.src = KingCard;
                card2.src = QueenCard;
                card3.src = QueenCard;
            }

            else if (randomNumberClone === 2) {
                card2.src = KingCard;
                card3.src = QueenCard;
                card1.src = QueenCard;
            }

            else if (randomNumberClone === 3) {
                card3.src = KingCard;
                card1.src = QueenCard;
                card2.src = QueenCard;
            }

            // Condition if random number and card index matched...!
            if (randomNumberClone === cardIndex) {
                this.setState({
                    message: "Congratulation! You Won the Game! You clicked the King Card."
                });
            }

            else {
                this.setState({
                    message: "Sorry! You Lost the Game!"
                });
            }
        }

        // Updating flag state...!
        this.setState({
            isPlaying: true
        });
    }

    // Function to reset game...!
    resetGame = () => {
        let card1 = document.getElementById("card1");
        let card2 = document.getElementById("card2");
        let card3 = document.getElementById("card3");

        card1.src = BacksideCard;
        card2.src = BacksideCard;
        card3.src = BacksideCard;

        this.setState({
            isPlaying: false,
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1> Card Flip Game in React JS </h1>
                <hr />
                <h2> {this.state.message} </h2>
                <div>
                    <img
                        alt="Card"
                        src={BacksideCard}
                        style={StyleSheet.Cards}
                        id="card1"
                        onClick={this.play.bind(this, 1)}
                    />
                    <img
                        alt="Card"
                        src={BacksideCard}
                        style={StyleSheet.Cards}
                        id="card2"
                        onClick={this.play.bind(this, 2)}
                    />
                    <img
                        alt="Card"
                        src={BacksideCard}
                        style={StyleSheet.Cards}
                        id="card3"
                        onClick={this.play.bind(this, 3)}
                    />
                </div>

                <button onClick={this.resetGame}> Reset Game </button>
            </div>
        )
    }
}

const StyleSheet = {
    Cards: {
        height: '300px',
        width: '200px',
        cursor: "pointer"
    }
}

export default CardFlipGame;

// App completed successfully...!