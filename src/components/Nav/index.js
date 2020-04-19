import React, { useContext, useEffect, Component, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { mainList } from '../../config/page.config';
import _ from 'lodash';
import { pageContext } from '../../App';
import './index.less';



class Tab extends Component{
  
    render(){
        const { state, dispatch, tabFixed} = this.props;
        return(
            <div ref='tab_fixed' style={{height: '60px'}}>
            <ul className={tabFixed ? 'isFixed':''}>
                
            {
                _.map(mainList, (item, index) => {
                    return(
                        <Link key={item.name} style={{color: '#000', textDecoration: 'none'}}  to={index === 0 ? '/':`/${item.routerName}/`}>
                            <li onClick={() => dispatch({type: 'changePage', payload: {index:index}})}
                                style={state.curPage === index ? {backgroundColor: '#ddd'}:null} 
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

function handleScrollThree(tabRef, setTabFixed, tabFixed) {
    let offsetTop = tabRef.refs.tab_fixed.getBoundingClientRect().top;
    let isTop = offsetTop < 0 ? true : false;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (tabFixed !== isTop) {
        setTabFixed(isTop);
    }
    if (scrollTop <200) {
         setTabFixed(false);
    }
}

export default function Index(props) {
    const {state, dispatch} = useContext(pageContext);
    const [tabFixed, setTabFixed] = useState(false);
    const tabRef = useRef(null);
    useEffect(() => {
       window.addEventListener('scroll', _.throttle(() => handleScrollThree(tabRef.current, setTabFixed, tabFixed), 100));
    }, [])

    return (
        <div className='navigator'>
            <div className='header'>
                <h3>Ellen的博客</h3>
                <p className='tag'>Don't flatter yourself too much</p>
            </div>
           <Tab ref={tabRef} state={state} dispatch={dispatch} tabFixed={tabFixed}/>
        </div>
    )
    
}
