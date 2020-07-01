import React from 'react';
import axios from 'axios';// to do the http request

import './App.css';

class App extends React.Component {
    state = { advice: ''}; // state is like an object that contains the essentials for the specific class involved
    
    componentDidMount(){
    this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const { advice } = response.data.slip;// next step destructure advice and take it out from the response
            this.setState({advice: advice});// we populate the state with the advice from response
        
        })
        .catch((error)=>{
        console.log(error);
        });
    }
    render() { 
        const { advice } = this.state;
        return (
         // display advice, now it belongs to the state   
        <div className="app">
            <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
        </button>
            </div>
        </div>
         );
    }
}
 
export default App;
// we have access to advice only inside the fetchAdvice method
// to have access to it and render it we have the state