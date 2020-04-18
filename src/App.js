import React, {useReducer} from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import Home from './pages/index';
import JS from './pages/JS/index';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import BackTop from './components/BackTop/index';
function reducer(state, action) {
    switch(action.type) {
        case 'changePage': {console.log(state,'fffffffffff', action);return {...state, curPage: action.payload.index}} 
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
                <Footer />
                <BackTop />
            </div>
        </Router>
    )
}
export { App, pageContext } ;