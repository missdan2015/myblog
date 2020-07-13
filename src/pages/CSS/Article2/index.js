import React, { Component } from 'react';

export default class Index extends Component {
    render() {

        return (
            <div>
            <ul>
                
               <li>
                   <h4>水平居中</h4>
                   <p>盒子水平居中-----margin: 0 auto;</p>
                   <p>文本水平居中-----text-align: center;注意：这中居中方式对于多行文本不是很美观，因此最好使用像水平垂直居中那种写法</p>
               </li>

               <li>
                   <h4>垂直居中</h4>
                   <p>单行文本垂直居中-----line-height和height的值大小设置为一样的</p>
                   <p>多行文本垂直居中-----(1)可以将父元素设置display: table;子元素：display: table-cell;vertial-align: middle
                       (2) 用像水平垂直居中那种写法
                   </p>
               </li>

               <li>
                   <h4>水平垂直居中</h4>
                   <p>
                       方案1：定位的三种写法
                   </p>
                  
                   <p>
                       方案2： display: flex;  justify-content:center;  align-items:center;
                   </p>
               </li>

            </ul>
            <div style={{width: '100%'}}>
                <img style={{width: '100%'}} src={require('../../../static/images/css11.png')} alt='' />
            </div>
            </div>
        )
    }
}
