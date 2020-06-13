import React from 'react'
import ReactMarkdown from 'react-markdown';
export default function index() {
    let space = '\n\n &nbsp;&nbsp;&nbsp;&nbsp;';

    return (
        <div className='article article2'>
            <blockquote>
                <p className="explanation">
                    记住两点： 1. this永远指向一个对象； 2. this的指向完全取决于函数调用的位置；
                </p>
            </blockquote>
            <div>
                <h3>一般情况下this的指向函数的调用者，列举七种常见的调用函数的场景</h3>
                <ul className='ul1'>
                    <li><mark>f()</mark><span>普通方式调用函数，this指向window</span></li>
                    <li><mark>(function() {'{'}alert(this){'}'})()</mark><span>立即指向函数自动调用，指向window</span></li>
                    <li><mark>setInterval(function(){}, 1000)</mark><span>定时器自己调用，里面的this指向window</span></li>
                    <li><mark>obj.f()</mark><span>指向对象obj</span></li>
                    <li><mark>new Obj()</mark><span>构造函数里的this指向new的实例对象，其原型对象里的this也是指向实例对象</span></li>
                    <li><mark>btn.oncliick=function() {'{'}alert(this){'}'}</mark><span>指向函数的调用者btn</span></li>
                    <li><mark>() => {'{'}{'}'}</mark><span>箭头函数不绑定this, 如果在箭头函数种使用this, 则this指向箭头函数定义的位置</span></li>
                </ul>
            </div>

            <div>
                <h3>通过特殊api改变函数内部this指向，比如call, apply, bind</h3>
                <p>f.call(thisArg, 参数1，参数2，。。。),  立即调用原函数，改变this指向；thisArg为null时，表示不需要改变this指向</p>
                <p>f.apply(thisArg, [参数1， 参数2， ]), 立即调用原函数，改变this指向；Math.max.apply(null, [1,2,3])</p>
                <p>bind, 不立即调用原函数，只是先绑着，改变this指向</p>
            </div>
        </div>
    )
}
