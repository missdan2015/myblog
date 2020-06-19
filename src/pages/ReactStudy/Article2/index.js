import React, { Component, useState } from 'react'

function FunCom(props) {
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count+1)
    }
    const show = () => {
        setTimeout(() => {
            alert(count)
        }, 2000);
    }
    return(
        <div style={{background: '#fff', padding: '20px'}}>
            <mark>{props.name}</mark>
            <p style={{margin: '20px 0'}}>初始值：{count}</p>
            <button onClick={add}>累加</button>
            <button onClick={show}>展示</button>
           
        </div>
    )
}

class ClassCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    show = () => {
        setTimeout(() => {
            alert(this.state.count)
        }, 2000);
    }

    render() {
        return(
            <div style={{background: '#fff', padding: '20px', margin: '20px 0'}}>
                <mark>{this.props.name}</mark>
                <div>
                    <p style={{margin: '20px 0'}}>初始值：{this.state.count}</p>
                    <button onClick={this.add}>累加</button>
                    <button onClick={this.show}>展示</button>
                </div>
            </div>
        )
    }
}

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <pre>hooks钩子函数更新state与类组件更新state的区别</pre>
                <p>点击完展示后立即点击累加，观察两种写法最后alert的结果</p>
                <ClassCom name="我是类组件" work={this.state.work}/>
                <FunCom name='我是hooks组件' work={this.state.work}/>
            </div>
        )
    }
}
