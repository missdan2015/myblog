import React from 'react'

export default function index() {
    return (
        <div>
            <pre>继承是指子类可以继承父类得成员，切勿把继承与实例化对象搞混了</pre>
            <blockquote>
                ES5继承和ES6继承的区别:<br></br>
                (1) ES5的继承实质上是先创建子类的实例对象， 然后再将父类的方法添加到this上（ Parent.call(this)）<br></br>
                (2)ES6的继承有所不同，实质上是先创建父类的实例对象this，然后再用子类的构造函数修改this。因为子类没有自己的this对象，所以必须先调用父类的super()方法，否则新建实例报错
            </blockquote>
             
            <ul>
                <li>
                    <h4>原型链继承</h4>
                    <pre>原型链方案存在的缺点：多个实例对引用类型的操作会被篡改</pre>
                </li>
                <li>
                    <h4>借用构造函数继承</h4>
                    <pre>(1)只能继承父类的实例属性和方法， 不能继承原型属性 / 方法;</pre>
                    <pre>(2)无法实现复用， 每个子类都有父类实例函数的副本， 影响性能</pre>
                </li>
                 <li>
                    <h4>组合继承</h4>
                    <pre>使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承</pre>
                    <pre>缺点：调用了两次超类的构造函数，导致基类的原型对象中增添了不必要的超类的实例对象中的所有属性。</pre>
                </li>
                <li>
                    <h4>原型式继承</h4>
                    <pre>基于已有的对象创建新的对象</pre>
                    <pre>缺点：与原型链中提到的缺点相同，一个是传参的问题，一个是属性共享的问题</pre>
                </li>
            </ul>
              <div style={{width: '100%'}}>
                <img style={{width: '100%'}} src={require('../../../static/images/css10.png')} alt='' />
              </div>
              <div style={{width: '100%'}}>
                <img style={{width: '100%'}} src={require('../../../static/images/css7.png')} alt='' />
              </div>
        </div>
    )
}
