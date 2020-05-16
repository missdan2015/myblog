import React, { useState } from 'react'
import './index.less';
import _ from 'lodash';
import { catalogue, data } from './config';

export default function Index() {
    const [curCatalogue, setCurCatalogue] = useState('love');
    const handleChangeCatalogue = (key) => {
        setCurCatalogue(key);
    }
    let curData = _.find(data, dd => dd.key === curCatalogue) || {};


    const renderStar = (star) => {
        let result = [];
        for(let i=0; i<star; i++) {
            result.push(
                <img src={require('../../static/images/star1.png')} alt=''/>
            )
        }

         return result
     }
    return (
        <div className='movieWrap'>
            <div className="container">
                <div className='left'>
                    <ul className='catalogue'>
                        {
                            _.map(catalogue, item => {
                                return(
                                    <li key={item.key} onClick={() => handleChangeCatalogue(item.key)}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='right'>
                    <div className='head'>
                        <div className='video'>
                            <video width="320" height="200" controls="controls" autoplay="autoplay" loop muted="true">
                            <source src={require('../../static/images/snake.mp4')} type="video/mp4" />
                            </video>
                        </div>
                        <div className='text'>
                            <h3>爱电影，爱生活</h3>
                            <p style={{padding: '10px 0'}}>怕慢慢会忘记当初看过电影，不想忘记</p>
                            <p>致敬幕后台前所有的工作者，没有你们的专业和付出，就没有我们的视觉和灵魂的盛宴</p>
                        </div>
                    </div>
                    <div className='content'>
                        <p className='title'>列表（排名不分先后,星星个数表示个人喜爱程度）</p>
                        <ul>
                            {
                                _.map(curData.movieList, item => {
                                    return(
                                        <li key={item.id}>
                                            <span className='imgBox'>
                                                <img src={item.imgUrl} alt=''/>
                                            </span>

                                            <div className='detail'>
                                                <p className='name'>
                                                    <span className='span1'>{item.name}&nbsp;{renderStar(item.star)}</span>
                                                    <span style={{fontSize:'16px', color: '#666'}}>豆瓣评分：{item.score}</span>
                                                </p>
                                                <span className='storyBox'>
                                                    <span className='span1'>{item.detail}</span>
                                                    <span className='span2'>个人点评：{item.comment}</span>
                                                </span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

   
}
