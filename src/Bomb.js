// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    
    render() {
        let message;
        if(this.state.secondsLeft !== 0) {
            message = `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            message = 'Boom!'
        }
        return (
            <h3>
              {message}  
            </h3>
        );
    }
}

export default Bomb;
