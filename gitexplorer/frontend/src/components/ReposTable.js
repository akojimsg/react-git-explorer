const React = require('react');
const PropTypes = require('prop-types');
const JsonTable = require('ts-react-json-table');
const Api = require('../utils/api');

class ReposTable extends React.Component {

  constructor(props){
    super(props);

    this.props.ResetTable();
  }

  componentDidMount(){
    Api.fetchUserRepos(this.props.username).then(response =>{
      const data = response.repos.data;
      this.props.LoadTableData(data['data']);

    }).catch(error => {
        console.log(error);
    });
  }

  render(){
      var columns = [
          {key: 'id', label: 'Id'},
          {key: 'full_name', label: 'Project', cell: function(row,columnKey){
            return <a href={row.html_url} target="_blank">{row.full_name}</a>;
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
            this.props.show==="false" &&
            <div className="inner">
                <h3>Fetching public repos for @{this.props.username} ...</h3>
            </div>
          }
          {
            this.props.show==="true" &&
            <div className="inner">
                <h2>Git Repos for @{this.props.username}</h2>
                  <div className="table-wrapper">
                      <JsonTable rows={this.props.data} columns={ columns } settings={ settings } />
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

export default ReposTable;