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
          Git Repos es una aplicación hecho con <code>ReactJS</code> y <code>Django Rest Framework</code> para explorer
          los repositorios públicos de un usuario de github.
          </p>
          <p><a href="/reposviewer" className="button special">Explora repositorios</a></p>
        </div>   
      </section>            
 
    );
  }
}

module.exports = Home;