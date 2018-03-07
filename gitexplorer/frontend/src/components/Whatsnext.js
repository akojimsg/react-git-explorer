const React = require('react');
//var Link = require('react-router-dom').Link;


class Whatsnext extends React.Component {
  render() {
    return (

      <section id="wrapper">
    
        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">You tell me!</h2>
            <p>Stacks on deck, Patrón on ice. You could have whatever you like ... I said, you could have whatever you like.</p>
            <section className="features">
              <article>
                <a href="" className="image"><img src="images/pic04.jpg" alt="" /></a>
                <h3 className="major">You could have whatever you like</h3>
                <p>This is <b>bold</b> and this is <strong>strong</strong>.</p>
                <a href="" className="special">Learn more</a>
              </article>
              <article>
                <a href="" className="image"><img src="images/pic05.jpg" alt="" /></a>
                <h3 className="major">You could have whatever you like</h3>
                <p>This is <i>italic</i> and this is <em>emphasized</em>.</p>
                <a href="" className="special">Learn more</a>
              </article>
              <article>
                <a href="" className="image"><img src="images/pic06.jpg" alt="" /></a>
                <h3 className="major">You could have whatever you like</h3>
                <p> This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.</p>
                <a href="" className="special">Learn more</a>
              </article>
              <article>
                <a href="" className="image"><img src="images/pic07.jpg" alt="" /></a>
                <h3 className="major">You could have whatever you like</h3>
                <p>This is <u>underlined</u>. Finally, <a href="/">this is a link</a>.</p>
                <a href="" className="special">Learn more</a>
              </article>
            </section>
            <ul className="actions">
              <li><a href="/" className="button">Browse All</a></li>
            </ul>
          </div>
        </section>

      </section>            
 
    );
  }
}

module.exports = Whatsnext;