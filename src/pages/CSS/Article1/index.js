import React from 'react';

export default function Index() {

    return (
        <div>
            <div>
                <blockquote> position 属性的五个值：
                    <mark>fixed | absolute | relative | static | sticky</mark>
                </blockquote>
            </div>
            <ul>
                <li>
                    <h4>fixed定位</h4>
                    <p>元素的位置相对于浏览器窗口是固定位置</p>
                    <p>
                        <mark>脱离文档流</mark>, fixed定位的元素和其他元素重叠。
                    </p>
                        
                </li>
                <li>
                    <h4>absolute定位</h4>
                    <p>绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于html。</p>
                    <p>
                        <mark>脱离文档流</mark>, absolute 定位的元素和其他元素重叠。
                    </p>
                        
                </li>
                <li>
                    <h4>relative定位</h4>
                    <p>相对定位元素的定位是相对其正常位置。移动相对定位元素，但它原本所占的空间不会改变</p>
                </li>
                <li>
                    <h4>static定位</h4>
                    <p>HTML 元素的默认值，即没有定位，静态定位的元素不会受到 top, bottom, left, right影响</p>
                </li>
                <li>
                    <h4>sticky定位</h4>
                    <p>元素的位置基于用户的滚动位置来定位,在 position:relative 与 position:fixed 定位之间切换。
                    这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
                    </p>
                </li>
            </ul>
            <div>
                <blockquote>
                    重叠的元素: 元素的定位与文档流无关， 所以它们可以覆盖页面上的其它元素, z - index属性指定了一个元素的堆叠顺序
                </blockquote>
            </div>
            <div style={{width: '100%'}}>
                <img style={{width: '100%'}} src={require('../../../static/images/css2.png')} alt='' />
            </div>
        </div>
    )
}
