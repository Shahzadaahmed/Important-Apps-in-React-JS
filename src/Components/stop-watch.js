// Stop-Watch App Component...!

import React, { Component } from "react";

class StopWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isStarted: false,
            seconds: 0,
            minutes: 0
        }
    }

    // Declaring global variable for handle timer...!
    timeInterval;

    // Function to start timer...!
    startTimer = () => {
        this.setState({
            isStarted: true
        });

        this.updateTimer();
    }

    // Function to update the timer...!
    updateTimer = () => {
        this.timeInterval = setInterval(() => {
            let secondsClone = this.state.seconds;
            secondsClone++;

            if (secondsClone < 60) {
                this.setState({
                    seconds: secondsClone
                });
            }

            else {
                let minutesClone = this.state.minutes;
                minutesClone++;
                this.setState({
                    minutes: minutesClone,
                    seconds: 0
                });
            }

        }, 100);
    }

    // Function to pause the timer...!
    pauseTimer = () => {
        clearInterval(this.timeInterval);
        this.setState({
            isStarted: false
        });
    }

    stopTimer = () => {
        clearInterval(this.timeInterval);
        this.setState({
            isStarted: false,
            seconds: 0,
            minutes: 0
        });
    }

    render() {
        return (
            <div>
                <h1> Stop Watch App in React JS </h1>
                <hr />
                <h2> {`Minutes : ${this.state.minutes}`} </h2>
                <h2> {`Seconds : ${this.state.seconds}`} </h2>
                <div>
                    {
                        (!this.state.isStarted)
                            ?
                            (<button onClick={this.startTimer}> Start </button>)
                            :
                            (<button onClick={this.pauseTimer}> Pause </button>)
                    }
                    <button onClick={this.stopTimer}> Stop </button>
                </div>
            </div>
        )
    }
}

export default StopWatch;

// App completed successfully...!