const React = require('react');
const PropTypes = require('prop-types');
const Api = require('../utils/api');
const JsonTable = require('ts-react-json-table');

class ReposTable extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      repos: null,
    };
  }

  componentDidMount(){
    Api.fetchUserRepos(this.props.username).then(response =>{
      const repos = response.repos.data;
      this.setState({ repos });
    });      
  }
  
  render(){
      var columns = [
          {key: 'id', label: 'Id'},
          {key: 'full_name', label: 'Project'},
          {key: 'updated_at', label: 'Last Updated'},
      ];

      var settings = {
        header: true,
        keyField: 'name',
        noRowsMessage: 'El usuario no tiene proyectos o no existe'
      };  

      return (
        <section id="four" className="wrapper alt style1">
          <div className="inner">
              <h2>Repositorios GITHUB de @{this.props.username}</h2>
                <div className="table-wrapper">
                    {
                      !this.state.repos &&
                      <p>Explorando repositorios de @{this.props.username} ...</p>
                    }
                    {
                      this.state.repos!=null &&
                      <JsonTable rows={this.state.repos} columns={ columns } settings={ settings } />
                    }
                </div>
                <ul className="actions">
                  <li><a href="/reposviewer" className="button">Regresar</a></li>
                </ul>            
          </div>
        </section>
      );
    }
}

ReposTable.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

class UserInput extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }    

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        username: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }

  render() {
    return (
      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Explora Repositorios</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="inner">
              <div className="row uniform">
                <div className="8u 12u$(xsmall)">
                  <input 
                      id="username" 
                      placeholder={this.props.label}
                      type="text"                           
                      value={this.state.username}
                      autoComplete='off'
                      onChange={this.handleChange}
                  />
                </div>
                <div className="4u 12u$(xsmall)">
                  <button 
                      className="special fit" 
                      type="submit" 
                      disabled={!this.state.username}>
                      Enviar
                    </button>
                </div>                    
              </div>
          </div>  
        </form>            
      </section>
    );
  }
}

UserInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

UserInput.defaultProps = {
  label: 'Username',
}

class Reposviewer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      GitUserName: '',
      GitUserImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {

    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    });
  }

  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }

  render(){

    var gitUserName = this.state.gitUserName;
    var gitUserImage = this.state.gitUserImage

    return(
        <section id="wrapper">
          {!gitUserImage && <UserInput
            id='gitUser'
            label='Ingresa un usuario para navegar su repo'
            onSubmit={this.handleSubmit} />}

          {gitUserImage != null &&
            <ReposTable
              avatar={gitUserImage}
              username={gitUserName} />}

        </section>      
    );
  }
}

module.exports = Reposviewer;