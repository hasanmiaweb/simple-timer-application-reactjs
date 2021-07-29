import React, { Component } from 'react';
import './timer.style.css'
class Timer extends Component {

    state = {
        count: 0
    }

    intervalId = null


    incrementCount = () =>{
        this.setState({count:this.state.count + 1})
    }

    decrementCount = () =>{
        if (this.state.count> 0) {
                this.setState({count:this.state.count - 1})
        }
    }

    startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(()=>{
                this.setState({count:this.state.count - 1});
                if (this.state.count === 0) {
                    alert("Timer Finished successfuly")
                    clearInterval(this.intervalId)
                    this.intervalId = null
                }
            }, 1000)
        }
    }

    stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetTimer = () => {
        this.setState({count:0})
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    render() {
        return (
            <div>
                <h1 className="heading">Simple Timer Application Reactjs</h1>
                <div className="container">
                    <button className="Btn" onClick={this.decrementCount}> - </button>
                    <span className="text">{this.state.count}</span>
                    <button className="Btn" onClick={this.incrementCount}> + </button>
                </div>
                <div className="container">
                    <button className="Btn" onClick={this.startTimer}>Start</button>
                    <button className="Btn" onClick={this.stopTimer}>Stop</button>
                    <button className="Btn" onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Timer;