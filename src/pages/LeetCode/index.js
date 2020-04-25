import React, { Component } from 'react';
import { articleList, tags } from './config';
import _ from 'lodash';
import './index.less';

export default class Index extends Component {
    render() {

        return (
            <div className = 'leetwrap' >
                <div className='head'>
                    <img src={require('../../static/images/laba.png')} alt=''/>
                    <span style={{marginLeft: '10px'}}>所有题目来源
                        <a href='https://leetcode-cn.com/' target='blank'>中国版LeetCode</a>,收录的题目均为个人曾经刷过的一些简单类型的，答案仅供参考，使用JavaScript完成
                    </span>
                </div>
                <div className='content'>
                <div className='left'>
                    <div className='name'>所有题目列表</div>
                    <ul>
                    {
                        _.map(articleList, item => {
                            return(
                                <li key={item.num}>
                                    <div className='title'>
                                        <span>{item.num}-{item.name}&nbsp;  
                                            <span style={{borderRadius:'2px', fontSize:'12px', background: 'orange', color:'#fff', padding: ' 1px 2px'}}>{item.tag}</span>
                                        </span>
                                        <span className='btn'>[参考答案]</span>
                                    </div>
                                    <p style={{fontSize: '13px', color: '#666'}}>{item.title}</p>
                                </li>
                            )
                        })                   
                    }
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        {
                            _.map(tags, tag => {
                                return(
                                    <li key={tag.id}>
                                        <p>{tag.name}</p>
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
}
