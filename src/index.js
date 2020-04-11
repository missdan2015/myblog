import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import './index.css';


class Main extends Component {
    render() {
        return (
            <div>
                <h2>react测试</h2>
                <Clock name='1.定时器的设计' />
            </div>
        );
    }
}

ReactDOM.render( 
    <Main/>,
    document.getElementById('root')
);