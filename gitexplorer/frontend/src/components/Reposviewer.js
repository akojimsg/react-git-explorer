const React = require('react');
const PropTypes = require('prop-types');

function UserPreview (props) {
  return (
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="/" className="image"><img src={props.avatar} alt={'Avatar for ' + props.username} /></a>
            <div className="content">
              <h2 className='username'>@{props.username}</h2>
              <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
              <a href="/" className="special">Learn more</a>
            </div>
          </div>
        </section>
      </section>
  )
}

UserPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

class Reposviewer extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }    

  render() {
    return (

        <section id="wrapper">
            <section id="four" class="wrapper alt style1">
              <div className="inner">
                <h2 className="major">Explora Repositorios</h2>
              </div>
              <div className="inner">
                  <div className="row uniform">
                    <div class="8u 12u$(xsmall)">
                      <input type="text" name="username" id="username" placeholder="Ingresa un usuario de github para navegar su repo" />
                    </div>
                    <div class="4u 12u$(xsmall)">
                      <input type="submit" value="Enviar" class="special fit" />
                    </div>                    
                  </div>
              </div>              
            </section>
        </section>             
 
    );
  }
}

module.exports = Reposviewer;