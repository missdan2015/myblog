import React, { Component } from 'react';

import './index.less';
import { textList, imgs } from '../config/page.config';
import _ from 'lodash';

export default class Index extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            curImgIndex: 0
        }
    }
   componentDidMount() {
       let _this = this;
        (function () {
            var slider = document.getElementById("imgSlider");
            var imgul = slider.getElementsByTagName("ul")[0];
            var imglis = imgul.getElementsByTagName("li");
            var len = imglis.length;
            var index = 0;
            setInterval(function () {
                if (index >= len) {
                    index = 0;
                }
                imgul.style.left = -(300 * index) + "px";
                index++;
                _this.setState({
                    curImgIndex: index-1
                })
            }, 2000);
        })();
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
                    <div className='left'>

                    </div>
                    
                    <div className='right'>
                        <div className='up' id='imgSlider'>
                            <ul>
                            {
                                _.map(imgs, (item, index) => {
                                    return(
                                        <li key={index}>
                                            <img src={item} alt=''/>
                                        </li>
                                    )
                                }) 
                            }
                            </ul>
                            <ol>
                            {
                                _.map(imgs, (item,index) => {
                                    return(
                                    <li key={index} style={{color: '#fff', width: '20px', fontSize: '14px'}}>
                                        <span style={this.state.curImgIndex === index ? {backgroundColor: '#000', borderRadius:'2px'} : null}>
                                            {index+1}
                                        </span> 
                                    </li>
                                    )
                                })
                            }
                            
                            </ol>
                        </div>
                        <div className='down'> 广告位</div>
                    </div>
                </div>
                
                  
            </div>
        )
    }
}
