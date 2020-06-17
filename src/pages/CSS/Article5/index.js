import React, { Component } from 'react';

export default class Index extends Component {
    render() {

        return (
            <div>
              <ul>
                    <li>
                        <h4>盒子阴影</h4>
                        <p>
                            <pre>box-shadow: h-shadow v-shadow blur spread color inset;</pre>
                            <table>
                                <tr>
                                    <th>可选值</th>
                                    <th>描述</th>
                                </tr>
                                <tr>
                                    <td>h-shadow</td>
                                    <td>必需。水平阴影的位置。允许负值。</td>
                                </tr>
                                <tr>    
                                    <td>v-shadow</td>
                                    <td>必需。垂直阴影的位置。允许负值。</td>
                                </tr>
                                <tr>   
                                     <td>blur</td>
                                     <td>可选。模糊距离。</td>
                                </tr>
                                <tr>    
                                    <td>spread</td>
                                    <td>可选。阴影的尺寸。</td>
                                </tr>
                                <tr>  
                                    <td>color</td>
                                    <td>可选。阴影的颜色。请参阅 CSS 颜色值。</td>
                                </tr>
                                <tr>
                                    <td>inset</td>
                                    <td>可选。将外部阴影 (outset) 改为内部阴影。</td>
                                </tr>
                                
                            </table>
                        </p>
                    </li>
                    <li>
                        <h4>文本阴影</h4>
                         <p>
                            <pre>text-shadow: h-shadow v-shadow blur color;</pre>
                            <table>
                                <tr>
                                    <th>可选值</th>
                                    <th>描述</th>
                                </tr>
                                <tr>
                                    <td>h-shadow</td>
                                    <td>必需。水平阴影的位置。允许负值。</td>
                                </tr>
                                <tr>    
                                    <td>v-shadow</td>
                                    <td>必需。垂直阴影的位置。允许负值。</td>
                                </tr>
                                <tr>   
                                     <td>blur</td>
                                     <td>可选。模糊距离。</td>
                                </tr>
                                <tr>    
                                    <td>spread</td>
                                    <td>可选。阴影的尺寸。</td>
                                </tr>
                                
                            </table>
                        </p>
                    </li>
              </ul>
              <div style={{width: '100%'}}>
                <img style={{width: '100%'}} src={require('../../../static/images/css3.png')} alt='' />
              </div>
            </div>
        )
    }
}
