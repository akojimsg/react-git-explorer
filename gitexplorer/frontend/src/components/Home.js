const React = require('react');
//var Link = require('react-router-dom').Link;


class Home extends React.Component {
  render() {
    return (

      <section id="banner">
        <div className="inner">
          <div className="logo"><span className="icon fa-diamond"></span></div>
          <h2>Git Repos Explorer</h2>
          <p>
          This is a demo application, built on <code>ReactJS</code> and <code>Django Rest Framework</code>, to
          browse public repositories on github.
          </p>
          <p><a href="/reposviewer" className="button special">See in action</a></p>
        </div>   
      </section>            
 
    );
  }
}

module.exports = Home;