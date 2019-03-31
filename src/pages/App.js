import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/scss/App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Components from '../pages/Components';


class App extends Component {

  renderHeader = () => {
    return (
      <ul>
          <li>
            <Link className="active" to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
      </ul>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
          <div>
            {this.renderHeader()}

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/components" component={Components} />
          </div>
        </Router>
        </header>

      </div>
    );
  }
}


function Home() {
  return (
      <div>
          <h2>Home</h2>
          <div className="App-body">
             <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>

          </div>
      </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}


export default App;