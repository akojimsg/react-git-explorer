import { ShowReposTable, HideReposTable } from '../actions/actions.js';
import { connect } from 'react-redux';
import Reposviewer from '../components/Reposviewer';


const ReposviewerContainer = connect(
    function mapStateToProps(state) {
        return {
            GitUserName: state.viewReducer.GitUserName,
            showReposTable: state.viewReducer.showReposTable,
        };
    },

    function mapDispatchToProps(dispatch) {
        return {
            ShowReposTable: gitUser => dispatch(ShowReposTable(gitUser)),
            HideReposTable: gitUser => dispatch(HideReposTable(gitUser)),
        };
    }
)(Reposviewer);

export default ReposviewerContainer