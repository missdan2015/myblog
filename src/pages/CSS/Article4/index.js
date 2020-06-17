import React, { Component } from 'react';

export default class Index extends Component {
    render() {

        return (
            <div>
               <pre>
                矩形-rect; 圆形-circle; 椭圆-ellipse; 线-line; 折线-polyline; 多边形-poligon; 路径-path
               </pre>
               <blockquote>
                   SVG 文件可通过以下标签嵌入 HTML 文档：embed、object 或者 iframe
               </blockquote>
               
               <div style={{width: '100%'}}>
                <img style={{width: '100%'}} src={require('../../../static/images/css4.png')} alt='' />
              </div>
            </div>
        )
    }
}
