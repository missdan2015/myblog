import React from 'react'

export default function index() {
    return (
        <div>
            <ul>
                <li>
                    <h4>对象</h4>
                    <blockquote>js也是面向对象编程，所以出现那么一句话叫万物皆对象</blockquote>
                    <p>那么创建对象得方式有哪些呢？<br />
                    (1) let obj1 = new Object();<br />
                    (2) let obj2 = { `{ }` };-------这不是一个纯粹的空对象，它会继承原型链上的方法<br />
                    (3) es5中通过构造函数实例化一个对象<br />
                    (4) es6中通过class实例化对象<br></br>
                    (5) Object.create(obj), 这里如果obj传null，就创建的了一个真正的空对象，没有继承Object原型链上的任何方法
                     Object.create(null) 好处是不用考虑会和原型链上的属性重名问题.
                    </p>
                    
                </li>
                <li>
                    <h4>创建对象常用的几种方式</h4>
                    <blockquote>
                        1. 构造函数方式。先说说构造函数的几个特征：

                        a： 构造函数的函数名的第一个字母通常大写。

                        b： 函数体内<mark>使用this关键字</mark>， 代表所要生成的对象实例, 如果没使用就当普通函数来看。

                        c： 生成对象的时候， 必须使用new命令来调用构造函数。
                        缺点：在使用构造函数创建对象时， 每个方法都会在实例对象中重新创建一遍，浪费内存
                    </blockquote>
                    <blockquote>
                        2. 原型模式：缺点是所有的实例都是共享一组属性，不支持传参。
                    </blockquote>
                    <blockquote>
                        3. 组合构造函数和原型模式： 构造函数模式用于定义实例属性， 而原型模式用于定义方法和共享的属性
                    </blockquote>
                    <blockquote>
                        4. 动态原型模式
                    </blockquote>
                    <div style={{width: '100%'}}>
                        <img style={{width: '100%'}} src={require('../../../static/images/css9.png')} alt='' />
                    </div>
                    <blockquote>
                        <mark>如果构造函数内部有return语句:</mark><br></br>
                        (1)如果return后面跟着一个复杂数据类型（对象，数组等），new命令会返回return语句指定的对象；<br></br>
                        (2)如果return语句后面跟着一个简单数据类型（字符串，布尔值，数字等），则会忽略return语句，返回this对象。<br></br>
                        (3) 另一方面， 如果对普通函数（ 内部没有this关键字的函数） 使用new命令， 则会返回一个空对象。   
                    </blockquote>
                     <div style={{width: '100%'}}>
                        <img style={{width: '100%'}} src={require('../../../static/images/css6.png')} alt='' />
                    </div>
                </li>
                <li>
                    <h4>函数原型prototype</h4>
                    <p>
                        <pre>函数的 prototype 是一个对象， 因此这个prototype叫做构造函数得原型对象，既然是对象那么必定有_proto_属性</pre>
                    </p>
                </li>
                <li>
                    <h4>对象原型_proto_</h4>
                    <p>
                        <pre>对象的 __proto__ 指向原型对象prototype， __proto__ 将对象和原型连接起来组成了原型链</pre>
                    </p>
                </li>
            </ul>
        </div>
    )
}
