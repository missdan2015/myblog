import React from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import Home from './pages/index';
import BaseInfo from './pages/BaseInfo/index';
import Nav from './components/Nav/index';
 
class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/BaseInfo" component={BaseInfo} />
                </div>
            </Router>
        )
    }
}
export default App;