import React from 'react'
import {
    friendsUrl,
    workOnline,
    documents
} from '../../config/page.config';
import _ from 'lodash';
import './index.less';

export default function Index() {
    return (
    <div className='footer'>
        <div className='documents' >
            <p>{documents.title}</p>
            <ul>
                {
                    _.map(documents.list, (dd, index) => {
                        return(
                            <li key={index}>
                                <a href={dd.value} target='blank'>{dd.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='workOnline'>
            <p>{workOnline.title}</p>
            <ul>
                {
                    _.map(workOnline.list, (ww, index) => {
                        return(
                            <li key={index}>
                                <a href={ww.value} target='blank'>{ww.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='friendsUrl'>
            <p>{friendsUrl.title}</p>
            <ul>
                {
                    _.map(friendsUrl.list, (ff, index) => {
                        return(
                            <li key={index}>
                                <a href={ff.value} target='blank'>{ff.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
    )
}
