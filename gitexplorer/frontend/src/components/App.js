import React from 'react';
import ReposViewerContainer from '../containers/ReposViewerContainer';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home');
const Whatsnext = require('./Whatsnext');

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/reposviewer' component={ReposViewerContainer} />
              <Route exact path='/whatsnext' component={Whatsnext} />
              <Route render={function(){
                return (
                  <section id="wrapper">
                      <section id="four" class="wrapper alt style1">
                        <div class="inner">
                          <h2 class="major">Error 404</h2>
                          <p>Page not found.</p>

                        </div>
                      </section>
                  </section>
                  );
              }} />
          </Switch>
      </Router>
    );
  }
}

export default  App;
