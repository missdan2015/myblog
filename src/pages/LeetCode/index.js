import React, { useState } from 'react';
import { articleList, tags } from './config';
import _ from 'lodash';
import './index.less';

export default function Index() {
     
    const [curTag, setTag] = useState('array');
    let curData = _.find(articleList, aa => aa.key === curTag);
    console.log('curData', curData)
    return (
        <div className = 'leetwrap' >
            
            <div className='content'>
                <div className='left'>
                    <ul>
                        {
                            _.map(tags, tag => {
                                return(
                                    <li key={tag.id} onClick={() => setTag(tag.key)} 
                                    style={curTag === tag.key ? {background: '#ddd', borderLeft: '2px solid yellowgreen'} : null}>
                                        <p>{tag.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='right'>
                    <div className='head'>
                        题目来源于<a href='https://leetcode-cn.com/' target='blank'>中国版LeetCode</a>；收录的题目均为个人曾经刷过的一些简单类型的，答案仅供参考，使用JavaScript完成
                    </div>
                    <div className='name'>所有题目列表</div>
                    <ul>
                    {
                        _.map(curData.list, (item, index) => {
                            return(
                                <li key={item.num+'-'+index}>
                                    <div className='title'>
                                        <span>{item.num}-{item.name}</span>
                                        <span className='ansBtn'>参考答案</span>
                                    </div>
                                    <p style={{fontSize: '13px', color: '#666'}}>{item.title}</p>
                                </li>
                            )
                        })                   
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}
