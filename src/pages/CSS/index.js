import React, { useState, useEffect, } from 'react';
import { catalogue } from './config';
import './index.less';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { HashRouter as Router,Route} from 'react-router-dom';
import Article1 from './Article1/index';
import Article2 from './Article2/index';
import Article3 from './Article3/index';
import Article4 from './Article4/index';
import Article5 from './Article5/index';

export default function Index() {
    const [curArticle, setArticle] = useState(0);
    return (
        <div className='cssWrap'>
            <div className='left'>
                <ul>
                    {
                        _.map(catalogue, (item, index) => {
                            return (
                            <Link to={index === 0 ? '/CSS':`/CSS/${item.routerName}/`}  style={{color: '#000', textDecoration: 'none'}} >    
                                <li key={item.key+'-'+index}  onClick={() => setArticle(index)}
                                    style={curArticle === index ? {color: 'blue', background: '#eee'}:null} >
                                   <span>{index+1}.</span>&nbsp;
                                   {item.name}
                                </li>
                            </Link>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='right'>
                <Router>
                    <Route exact path="/CSS" component={Article1} />
                    <Route path="/CSS/Article2" component={Article2} />
                    <Route path="/CSS/Article3" component={Article3} />
                    <Route path="/CSS/Article4" component={Article4} />
                    <Route path="/CSS/Article5" component={Article5} />
                </Router>
            </div>
        </div>
    )
}
