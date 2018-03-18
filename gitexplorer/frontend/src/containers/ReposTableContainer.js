import { LoadTableData, ResetTable } from '../actions/actions.js';
import { connect } from 'react-redux';
import ReposTable from '../components/ReposTable';

const ReposTableContainer = connect(
  function mapStateToProps(state) {
    return {
        data: state.tableReducer.data,
        show: state.tableReducer.show,
    };
  },

  function mapDispatchToProps(dispatch) {
    return {
      LoadTableData: data => dispatch(LoadTableData(data)),
      ResetTable: () => dispatch(ResetTable())
    };
  }
)(ReposTable);

export default ReposTableContainer