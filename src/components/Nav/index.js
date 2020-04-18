import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mainList } from '../../config/page.config';
import _ from 'lodash';
import { pageContext } from '../../App';
import './index.less';

export default function Index(props) {
    const {state, dispatch} = useContext(pageContext);
    return (
        <div className='navigator'>
            <div className='header'>
                <h3>Ellen的博客</h3>
                <p className='tag'>Don't flatter yourself too much</p>
            </div>
            <ul>
                
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
