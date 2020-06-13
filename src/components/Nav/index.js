import React, { useContext, useEffect, Component, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { mainList } from '../../config/page.config';
import _ from 'lodash';
import { pageContext } from '../../App';
import './index.less';


// 因为函数组件没有实例，如果想用ref获取子组件的实例，子组件组要写成类组件。
class Tab extends Component{
  
    render(){
        const { state, dispatch, tabFixed} = this.props;
        return(
            <div ref='tab_fixed' style={{height: '50px', background: '#fff'}}>
            <ul className={tabFixed ? 'isFixed':''}>
                
            {
                _.map(mainList, (item, index) => {
                    return(
                        <Link key={item.name} style={{color: '#000', textDecoration: 'none'}}  to={index === 0 ? '/':`/${item.routerName}/`}>
                            <li onClick={() => dispatch({type: 'changePage', payload: {index:index}})}
                                style={state.curPage === index ? {backgroundColor: '#fff'}:null} 
                            >
                                <img src={require('../../'+item.logo)} alt='' />
                                <span>{item.name}</span>
                            </li>
                        </Link>

                    )
                })
            }
            </ul>
            </div>
        )
    }
}

function handleScroll(tabRef, setTabFixed, tabFixed) {
    let offsetTop = tabRef.refs.tab_fixed.getBoundingClientRect().top;

    let isTop = offsetTop < 0 ? true : false;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (tabFixed !== isTop) {
        setTabFixed(isTop);
    }
    if (scrollTop < 140) {
         setTabFixed(false);
    }
}

export default function Index(props) {
    const {state, dispatch} = useContext(pageContext);
    const [tabFixed, setTabFixed] = useState(false);
    const tabRef = useRef(null);
    useEffect(() => {
       window.addEventListener('scroll', _.throttle(() => handleScroll(tabRef.current, setTabFixed, tabFixed), 100));
    }, [tabFixed])

    return (
        <div className='navigator'>
            <div className='header'>
                <div className='myname'>
                    <h3>Ellen的博客</h3>
                    <p className='tag'>Don't flatter yourself too much</p>
                </div>
            </div>
           <Tab ref={tabRef} state={state} dispatch={dispatch} tabFixed={tabFixed}/>
        </div>
    )
    
}
