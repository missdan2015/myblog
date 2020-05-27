import React, { useState, useEffect } from 'react';
import { catalogue } from './config';
import './index.less';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { HashRouter as Router,Route} from 'react-router-dom';
import Article1 from './Article1/index';
import Article2 from './Article2/index';
import Article3 from './Article3/index';

export default function Index() {
    const [curArticle, setArticle] = useState(0);
    return (
        <div className='jsWrap'>
            <div className='left'>
                <ul>
                    {
                        _.map(catalogue, (item, index) => {
                            return (
                            <Link to={index === 0 ? '/JS':`/JS/${item.routerName}/`}  style={{color: '#000', textDecoration: 'none'}} >    
                                <li key={item.key+'-'+index}  onClick={() => setArticle(index)}
                                    style={curArticle === index ? {color: 'blue', background: '#eee', borderLeft: '2px solid blue'}:null} >
                                   <span>{index+1}.</span>&nbsp;
                                   {item.value}
                                </li>
                            </Link>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='right'>
                <Router>
                    <Route exact path="/JS" component={Article1} />
                    <Route path="/JS/Article2" component={Article2} />
                    <Route path="/JS/Article3" component={Article3} />
                </Router>
            </div>
        </div>
    )
}
