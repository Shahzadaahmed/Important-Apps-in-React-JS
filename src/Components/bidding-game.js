// Bidding Game Component...!

import React, { Component } from "react";

class BiddingGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGameStarted: false,
            balance: 1000,
            randomNumber: Math.floor(Math.random() * 6) + 1,
            bidNumber: "",
            amountValue: "",
            message: undefined
        }
    }

    // Function to start game...!
    startGame = () => {
        this.setState({
            isGameStarted: true
        });
    }

    // Form handler function...!
    formHandler1 = (event) => {
        this.setState({
            bidNumber: event.target.value
        });
    }

    formHandler2 = (event) => {
        this.setState({
            amountValue: event.target.value
        });
    }

    // Function to play game...!
    playGame = () => {
        let bidValueClone = Number(this.state.bidNumber);
        let amountValueClone = Number(this.state.amountValue);

        if (bidValueClone >= 1 && bidValueClone <= 6 && amountValueClone >= 50 && amountValueClone <= 500) {
            this.setState({
                bidNumber: '',
                amountValue: '',
                randomNumber: Math.floor(Math.random() * 6) + 1,
                isGameStarted: false
            });

            let matchFlag = this.bidMatched(this.state.randomNumber, bidValueClone);
            // console.log(matchFlag);

            this.gameStatus(matchFlag, amountValueClone);
        }

        else {
            alert("Bid Number which is less then 1 or greater then 6.\nOr\nUser amount which is less then 50 or greater then 500.\nwill not be acceptable!!!");
            this.setState({
                bidNumber: '',
                amountValue: '',
                isGameStarted: false
            });
        }
    }

    // Function to check if random number and user bid number matched...!
    bidMatched = (getRandomNum, getBidNum) => {
        let flag = false;

        if (getRandomNum === getBidNum) {
            flag = true;
        }
        return flag;
    }

    // Function to check game status...!
    gameStatus = (gameFlag, userAmount) => {
        let balanceClone = this.state.balance;

        if (gameFlag) {
            userAmount = balanceClone + userAmount;
            this.setState({
                balance: userAmount,
                message: `Congralutations! You WON the bid. Rs ${this.state.amountValue} added in your account.`
            });
        }

        else {
            userAmount = balanceClone - userAmount;
            this.setState({
                balance: userAmount,
                message: `Sorry! You LOSS the bid. Rs ${this.state.amountValue} deducted from your account.`
            });
        }
    }

    // Functiion to close the game...!
    closeGame = () => {
        this.setState({
            isGameStarted: false
        });
    }

    render() {
        return (
            <div>
                <h1> Bidding Game in React JS </h1>
                <hr />
                <button onClick={this.startGame}> Start </button>
                {
                    (this.state.isGameStarted)
                        ?
                        (
                            <div>
                                <label> Please select a number to play bid between 1 to 6 :
                                    <input autoFocus type="number" value={this.state.bidNumber} onChange={this.formHandler1} />
                                </label>

                                <br />

                                <label> Please enter an amount between 50 to 500 :
                                    <input type="number" value={this.state.amountValue} onChange={this.formHandler2} />
                                </label>

                                <br />
                                <button onClick={this.playGame}> Play </button>
                                <button onClick={this.closeGame}> Close </button>
                            </div>
                        )
                        :
                        (null)
                }
                <hr />
                <h3> {this.state.message} </h3>
                <h3> {`Your Account Balance: ${this.state.balance}`} </h3>
            </div>
        )
    }
}

export default BiddingGame;

// App completed successfully...!