import React, { useState } from 'react'
import { bookType, bookData } from './config';
import _ from 'lodash';
import './index.less';

export default function Index() {
    const [curType, setType ] = useState('life');
    let books = _.find(bookData, bb => bb.key === curType) || {};
    return (
        <div className='bookWrap'>
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
