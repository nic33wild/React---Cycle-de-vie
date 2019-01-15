import React, { Component } from 'react';
 
class MyTimer extends Component {
    
    constructor(props) {
      super(props);
      this.state = { timer: 0 };
    }
  
    // tictoc() {
    //   this.setState( prevState => ({
    //     timer: prevState.timer + 1
    //   }));
    //   console.log("Un update a eu lieu");
      
    // }
  
    // componentDidMount() {
    //   this.interval = setInterval( () => this.tictoc(), 1000);
    // }

    componentDidMount() {
      setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000);
    }
  
    componentDidUpdate() {
        console.log("un update a eu lieu");
    }
  
    render() {
      return (
        // <div>
        //   My Timer: {this.state.timer}
        // </div>
        <p id="timer">
        {this.state.timer} {this.state.timer > 1 ? " secondes" : " second"}
        
      </p>
      );
    }
  }
 export default MyTimer; 