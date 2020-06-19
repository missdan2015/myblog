import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function index() {
    let space = '\n\n &nbsp;&nbsp;&nbsp;&nbsp;';
    return (
        <div className='article'>
         <blockquote>
            <p className="explanation">闭包（closure）就是一个能够读取其它函数内部变量的函数；
            由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。
            </p>
         </blockquote>

            <p style={{background: '#222', color: '#fff', padding: '10px 20px'}}>
                <ReactMarkdown source={`function f1( ) { ${space}let name = "cdd"; ${space}function f2( ) { console.log(name)  }${space}return f2;\n\n} \n\nlet f3 = f1( );`} />
            </p>
            <blockquote> 上一节代码中的f2函数， 就是闭包。 因为我们可以在f1外部读取它的内部变量了。原因就在于f1是f2的父函数， 而f2被赋给了一个全局变量， 这导致f2始终在内存中， 而f2的存在依赖于f1， 因此f1也始终在内存中， 不会在调用结束后， 被垃圾回收机制（ garbage collection） 回收。</blockquote>
            <p>
                <h3>闭包的用途</h3>
                <p>闭包最大的用途有两个，一个是上面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。</p>
            </p>
            <div style={{width: '100%'}}>
                <img style={{width: '100%'}} src={require('../../../static/images/css8.png')} alt='' />
            </div>

            <h3>使用闭包的注意点</h3>
            <p>(1)由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。</p>
            <p>(2)闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。</p>
        </div>
    )
}
