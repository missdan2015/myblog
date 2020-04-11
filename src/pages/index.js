import React, { Component } from 'react';
import './index.less';
import { mainList } from '../config/page.config';
import _ from 'lodash';

export default class Index extends Component {
    render() {
        return (
            <div className='wrap'> 
               <div className='head'>头部</div>
               <div className='middle'>
                {
                    _.map(mainList, (item, index) => {
                        return(
                            <div key={index} className='box'>
                                <div className='up'></div>
                                <div className='down'>
                                    <span>{item.logo}</span>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        )
                    }) 
                }
                </div>
                <div className='footer'>页脚</div>
            </div>
        )
    }
}
