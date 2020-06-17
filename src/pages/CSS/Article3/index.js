import React, { Component } from 'react';

export default class Index extends Component {
    render() {

        return (
            <div>
               <ul>
                      <li>
                        <p>
                            <pre>animation: name duration timing-function delay iteration-count direction;</pre>
                            <table>
                                <tr>
                                    <th>可选值</th>
                                    <th>描述</th>
                                </tr>
                                <tr>
                                    <td>animation-name</td>
                                    <td>规定需要绑定到选择器的 keyframe 名称。</td>
                                </tr>
                                <tr>    
                                    <td>animation-duration</td>
                                    <td>规定完成动画所花费的时间，以秒或毫秒计。</td>
                                </tr>
                                <tr>   
                                     <td>animation-timing-function</td>
                                     <td>规定动画的速度曲线。</td>
                                </tr>
                                <tr>    
                                    <td>animation-delay</td>
                                    <td>规定在动画开始之前的延迟。</td>
                                </tr>
                                <tr>  
                                    <td>animation-iteration-count</td>
                                    <td>规定动画应该播放的次数</td>
                                </tr>
                                <tr>
                                    <td>animation-direction</td>
                                    <td>规定是否应该轮流反向播放动画。</td>
                                </tr>
                                
                            </table>
                        </p>
                    </li>
               </ul>
            </div>
        )
    }
}
