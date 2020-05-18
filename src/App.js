import React, {useReducer} from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import Home from './pages/index';
import JS from './pages/JS/index';
import CSS from './pages/CSS/index';
import LeetCode from './pages/LeetCode/index';
import Movies from './pages/Movies/index';
import Books from './pages/Books/index';
import ReactStudy from './pages/ReactStudy/index';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import BackTop from './components/BackTop/index';
function reducer(state, action) {
    switch(action.type) {
        case 'changePage': {return {...state, curPage: action.payload.index}} 
        default: return state;
    }
}


const pageContext = React.createContext({});
const initState = {curPage: 0};

function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    return(
        <Router>
            <div>
                <pageContext.Provider value={{state, dispatch}}>
                    <Nav />
                </pageContext.Provider>
                <Route exact path="/" component={Home} />
                <Route path="/JS" component={JS} />
                <Route path="/CSS" component={CSS} />
                <Route path="/ReactStudy" component={ReactStudy} />
                <Route path="/LeetCode" component={LeetCode} />
                <Route path="/Movies" component={Movies} />
                <Route path="/Books" component={Books} />
                <Footer />
                <BackTop />
            </div>
        </Router>
    )
}
export { App, pageContext } ;