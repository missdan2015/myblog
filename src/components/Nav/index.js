import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { mainList } from '../../config/page.config';
import _ from 'lodash';
import './index.less';

export default class index extends Component {
    render() {
        return (
            <div className='navigator'>
                <div className='header'>
                    <h3>Ellen的博客</h3>
                    <p className='tag'>Don't flatter yourself too much</p>
                </div>
                <ul>
                   
                {
                    _.map(mainList, item => {
                        return(
                            <li key={item.name}>
                                <Link style={{color: '#000', textDecoration: 'none'}} to={`/${item.routerName}/`}>
                                    <img src={require('../../'+item.logo)} alt='' />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
