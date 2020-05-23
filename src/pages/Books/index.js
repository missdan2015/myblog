import React, { useState } from 'react'
import { bookTypes, bookData } from './config';
import _ from 'lodash';
import './index.less';

export default function Index() {
    const [curType, setType ] = useState('novel');
    let books = _.find(bookData, bb => bb.key === curType) || {};
    return (
        <div className='bookWrap'>
            <div className='nav'>
                <ul>
                {
                    _.map(bookTypes, (type, index) => {
                        return(
                            <li key={type.key+ '-'+ index} onClick={() => setType(type.key)} style={curType === type.key ? {background: '#3366cc'}:null}>
                                <span className='title'>{type.title}</span>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
            <div className='content'>
                <ul className='bookList'>
                {
                    _.map(books.list, (item, index) => {
                        return(
                            <li key={item.name+'_'+index}>
                                <img src={item.url} alt='' style={{width: '100%', height: '100%'}}/>
                                <div className='owner'><span>{item.owner}</span></div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}
