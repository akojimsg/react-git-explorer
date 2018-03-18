import React from 'react';
import PropTypes from 'prop-types';

var submitActions = {
    Reset: 'Clear All',
    Submit: 'Send',
    Default: 'Send',
}

class UserInput extends React.Component {

    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
      this.props.InitInput(submitActions.Default);
  }

  handleChange(event) {
    var value = event.target.value;

    this.props.onInputChange(submitActions.Submit,value); //update the state of this component
    this.props.onChange(event,'gitUser'); //Execute Listener for external components
  }

  handleSubmit(event) {
    event.preventDefault();

    if(submitActions.Submit===this.props.submitAction){

        this.props.onSubmit( this.props.id, this.props.username);
        this.props.ResetInput(submitActions.Reset);

    }else{

        this.props.onReset(this.props.id);
        this.props.InitInput(submitActions.Default);

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
                      value={this.props.username}
                      autoComplete='off'
                      onChange={this.handleChange}
                  />
                </div>
                <div className="4u 12u$(xsmall)">
                  <button
                      className="special fit"
                      type="submit"
                      disabled={!this.props.enableAction}>
                      {this.props.submitAction}
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
  onReset: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

export default UserInput;