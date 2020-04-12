import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.less';

export default class Index extends Component {
    render() {
        return (
            <div className='baseInfo'>
                <Link to='/'>
                    <div>首页</div>
                </Link>
                <div>

                </div>
            </div>
        )
    }
}
