import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <img className='background' src={ require('./space.png') }/>
                    <img className='cloudso' src={ require('./clouds.png') }/>
                    <img className='cloudsw' src={ require('./clouds.png') }/>
                    <img className='cloudse' src={ require('./clouds.png') }/>
                    <img className='cloudsr' src={ require('./clouds.png') }/>
                    <img className='cloudst' src={ require('./clouds.png') }/>
                    <img className='cloudsy' src={ require('./clouds.png') }/>
                    <img className='moon' src={ require('./moon.png')}/>
                </div>
                
                <div className='r-container'>
                    <img className='r-rocket' src={ require('./rocket.png') }/>
                </div>
                
            </div>
        );
    }
}

export default App;
