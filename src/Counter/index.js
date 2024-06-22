import { Component } from "react";
import "./index.css"

class Counter extends Component{
    state = {"count":3}
    increaseCount = () =>{
        const {count} = this.state
        this.setState({"count":count+1})
    }
    decreaseCount = () =>{
        const {count} = this.state
        this.setState({"count":count-1})
    }
    render(){
        const {count} = this.state
        return (
            <div className="card">
                <h1>{count}</h1>
                <dv className="buttons-container">
                    <button onClick={this.increaseCount}>Increase</button>
                    <button onClick={this.decreaseCount}>Decrease</button>
                </dv>

            </div>
        )
    }
}

export default Counter


// state ==> count = 0
//this.setState(count + 1)

//renderMethod()