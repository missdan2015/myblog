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
        this.sliderImg = (function () {
            let slider = document.getElementById("imgSlider");
            let imgul = slider.getElementsByTagName("ul")[0];
            let imglis = imgul.getElementsByTagName("li");
            let len = imglis.length;
            let index = 0;
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

        let slidertext = document.getElementById('slidertext');
        let newText = document.getElementById('newText');
        let i = 0;
        this.timer = setInterval(() => {
            newText.innerHTML = (slidertext.innerHTML || '').substring(0, i);
            i++;
        }, 500);
   }
    componentWillUnmount() {
        this.sliderImg= null; //闭包回收
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className='wrap'> 
               
               <div className='container'>
                    <div className='left'>

                        <div id="slidertext" style={{display:'none'}}>
                              欢迎来到Ellen的博客！
                        </div>
                        <div id="newText" className='slidertext'> </div>
                        
                        <div className = 'contentBox' >
                            <img alt='' src = {require('../static/images/smile.png')} className='leftImg' />
                            <div className='rightText'>
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
                    </div>
                    
                    <div className='right'>
                        <div className='imgSlider' id='imgSlider'>
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
                    </div>
                </div>
                
                  
            </div>
        )
    }
}
