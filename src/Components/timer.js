// Timer Component...!

import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 59,
            minutes: 2,
            messsage: "Time Started"
        }
    }

    // Declaring global variable for handle timer...!
    timeInterval;

    // Function to update timer...!
    updateTimer = () => {
        this.timeInterval = setInterval(() => {
            let secondsClone = this.state.seconds;
            let minutesClone = this.state.minutes;

            if (secondsClone < 1) {
                if (minutesClone < 1) {
                    clearInterval(this.timeInterval);
                    this.setState({
                        messsage: "Time Up!"
                    });
                }

                else {
                    minutesClone--;
                    this.setState({
                        minutes: minutesClone,
                        seconds: 59
                    });
                }
            }

            else {
                secondsClone--;
                this.setState({
                    seconds: secondsClone
                });
            }
        }, 100);
    }

    componentDidMount() {
        this.updateTimer();
    }

    render() {
        return (
            <div>
                <h1> Timer App in React JS </h1>
                <hr />
                <h2> {this.state.messsage} </h2>
                <h2> {`Minutes : ${this.state.minutes} Seconds : ${this.state.seconds}`} </h2>
            </div>
        )
    }
}

export default Timer;

// App completed successfully...!