import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.Timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }

    //为了防止内存泄漏，记得卸载定时器
    componentWillUnmount() {
        clearInterval(this.Timer)
    }

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                当前时间为： {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}
