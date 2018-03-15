const React = require('react');
const PropTypes = require('prop-types');
const Api = require('../utils/api');
const JsonTable = require('ts-react-json-table');

class ReposTable extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      repos: null,
      show: "false",
    };
  }

  componentDidMount(){
    Api.fetchUserRepos(this.props.username).then(response =>{
      const repos = response.repos.data;
      this.setState({
        repos: repos,
        show: "true",
      });
    });      
  }
  
  render(){
      var columns = [
          {key: 'id', label: 'Id'},
          {key: 'full_name', label: 'Project', cell: function(row,columnKey){
            return <a href={row.html_url}>{row.full_name}</a>;
          }},
          {key: 'updated_at', label: 'Last Updated'},
      ];

      var settings = {
        header: true,
        keyField: 'id',
        noRowsMessage: 'This user does not exist or has no public repo'
      };  

      return (
        <section id="four" className="wrapper alt style1">
          {
            this.state.show==="false" &&
            <div className="inner">
                <h3>Fetching public repos for @{this.props.username} ...</h3>
            </div>
          }
          {
            this.state.show==="true" &&
            <div className="inner">
                <h2>Git Repos for @{this.props.username}</h2>
                  <div className="table-wrapper">
                      <JsonTable rows={this.state.repos.data} columns={ columns } settings={ settings } />
                  </div>
            </div>
          }
        </section>
      );
    }
}

ReposTable.propTypes = {
  show: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

class UserInput extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      username: '',
      submitAction: props.submitAction,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }    

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        username: value,
        submitAction: this.props.submitAction,
      }
    });

    this.props.onChange(event,'gitUser');
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.submitAction===this.props.submitAction){
        this.props.onSubmit(
          this.props.id,
          this.state.username
        );

        this.setState(function () {
          return {
            username: this.state.username,
            submitAction: "Resetear",
          }
        });
    }else{
        this.props.onReset(
          this.props.id
        );

        this.setState(function () {
          return {
            username: '',
            submitAction: this.props.submitAction,
          }
        });
    }
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
                      {this.state.submitAction}
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
  submitAction: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

UserInput.defaultProps = {
  label: 'Username',
}

class Reposviewer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      GitUserName: '',
      showReposTable: "false",
      actionText: "Enviar",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {

    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      //newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      newState['showReposTable'] = "true"
      return newState;
    });
  }

  handleChange(event, id){

    if(!event) return;

    var value = event.target.value;

    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = value;
      newState['showReposTable'] = "false"
      return newState;
    });
  }

  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState['showReposTable'] = "false";
      return newState;
    });
  }

  render(){

    var gitUserName = this.state.gitUserName;
    var showReposTable = this.state.showReposTable;
    var actionText = this.state.actionText;

    return(
        <section id="wrapper">
          <UserInput
            id='gitUser'
            label='Type a username to view their public repos'
            submitAction={actionText}
            onSubmit={this.handleSubmit}
            onReset ={this.handleReset}
            onChange = {this.handleChange}/>

          {showReposTable === "true" &&
            <ReposTable
              show="false"
              username={gitUserName} />}
        </section>
    );
  }
}

module.exports = Reposviewer;