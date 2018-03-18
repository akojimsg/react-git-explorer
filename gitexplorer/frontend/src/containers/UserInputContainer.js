import { ResetInput, onInputChange, InitInput } from '../actions/actions.js';
import { connect } from 'react-redux';
import UserInput from '../components/UserInput';


const UserInputContainer = connect(
    function mapStateToProps(state) {
        return {
            username: state.inputReducer.username,
            submitAction: state.inputReducer.submitAction,
            enableAction: state.inputReducer.enableAction,
        };
    },

    function mapDispatchToProps(dispatch) {
        return {
            onInputChange: (actionText, value) => dispatch(onInputChange(actionText, value)),
            ResetInput:    actionText => dispatch(ResetInput(actionText)),
            InitInput:     actionText => dispatch(InitInput(actionText)),
        };
    }
)(UserInput);

export default UserInputContainer