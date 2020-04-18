import React, { Component } from 'react';

import './index.less';
import { textList } from '../config/page.config';
import _ from 'lodash';

export default class Index extends Component {
 

    render() {
        return (
            <div className='wrap'> 
               <div className='head'>
                    <img alt='' src = {require('../static/images/smile.png')} className = 'left' />
                    <div className = 'right'>
                        <ul>
                            {
                                _.map(textList, (text, index) => {
                                    return(
                                        <li key={index}>
                                            <span>{text.detail}</span>
                                        </li>
                                    )
                                }) 
                            }
                        </ul>
                    </div>
               </div>

               <div className='middle'>
                    <div className='left'>

                    </div>
                    <div className='right'>
                        <div className='up'>dddddd</div>
                        <div className='down'> dddd</div>
                    </div>
                </div>
                
                  
            </div>
        )
    }
}
