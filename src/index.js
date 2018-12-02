import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReactDOM from 'react-dom';
import './index.css'
import  Header  from './components/Header/Header';
import  Home  from './components/Home/Home';
import  Versions  from './components/Versions/Versions';
import  Settings  from './components/Settings/Settings';





function BasicExample() {
    return (
        <Router >
            <div>
                <ul>
                    <Header/>
                </ul>
                <hr />
                <div className='content'>
                    <Route exact path="/" component={Home} />
                    <Route path="/versions" component={Versions} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/settings" component={Settings} />
                </div>

            </div>
        </Router>
    );
}

// function Versions() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
};

ReactDOM.render(
    <BasicExample />, document.getElementById('root')
);

