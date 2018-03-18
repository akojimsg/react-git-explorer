import React from 'react'
import ReposTableContainer from '../containers/ReposTableContainer'
import UserInputContainer from '../containers/UserInputContainer'

class Reposviewer extends React.Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount(){
    this.props.HideReposTable(null);
  }

  handleSubmit(id, username) {
    this.props.ShowReposTable(username);
  }

  handleChange(event, id){

    if(!event) return;

    var value = event.target.value;

    this.props.HideReposTable(value);
  }

  handleReset(id) {
    this.props.HideReposTable(null);
  }

  render(){
    return(
        <section id="wrapper">
          <UserInputContainer
            id='gitUser'
            label='Type a username to view their public repos'
            onSubmit={this.handleSubmit}
            onReset ={this.handleReset}
            onChange = {this.handleChange}/>

          {this.props.showReposTable &&
             <ReposTableContainer show="true" username={this.props.GitUserName} />
          }
        </section>
    );
  }
}

export default Reposviewer;