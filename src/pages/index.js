import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Heart from '../components/like/index';
import Circle from '../components/circle/index';
import Progress from '../components/progress/index';
import './index.less';
import {
    mainList,
    textList,
    friendsUrl,
    workOnline,
    documents
} from '../config/page.config';
import _ from 'lodash';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBackTop: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 100) {
                this.setState({
                    showBackTop: true
                })
            } else {
                this.setState({
                    showBackTop: false
                })
            }
        })
    }

    goTop = () => {
        let scrollToTop = window.setInterval(function () {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 2);
    }

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
                {
                    _.map(mainList, (item, index) => {
                        
                        return(
                            <div key={index} className='box'>
                                <div className='up'>
                                    {(index-1)%3 === 0 && <Progress />}
                                </div>
                                <Link style={{color: '#000', textDecoration: 'none'}} to={`/${item.routerName}/`}>
                                    <div className='down'>
                                        <img src={require('../'+item.logo)} alt='' />
                                        <span>{item.name}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    }) 
                }
                </div>
                
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
                {this.state.showBackTop && 
                    <div onClick={this.goTop} className='backTop'>
                        <img src={require('../static/images/btop.png')} alt=''/>
                    </div>      
                }      
            </div>
        )
    }
}
