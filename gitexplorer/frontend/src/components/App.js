const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home');
const Banner = require('./Banner');
const Reposviewer = require('./Reposviewer');

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/reposviewer' component={Reposviewer} />
              <Route render={function(){
                return (
                  <section id="wrapper">

                      <div class="wrapper">
                        <div class="inner">

                          <h3 class="major">Error 404</h3>
                          <p>Page not found.</p>

                        </div>
                      </div>

                  </section>                
                  );
              }} />
          </Switch>
      </Router>
    );
  }
}

module.exports = App;
