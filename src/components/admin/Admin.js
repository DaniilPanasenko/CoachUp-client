import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { getUsers } from '../../actions/admin'
import Users from './Users'


class Admin extends React.Component{
  constructor(){
    super();
    this.state = {
      page:''
    }
  }

  componentDidMount() {
    //this.props.getProfile(this.props.match.params.login)
  }
  handleUserClick=()=>{
    this.props.getUsers();
    this.setState({page:"users"})
  }

  render(){
      return (
        <div class="container mt-5">
          <div class="row">
            <button class="btn btn-info col-2 m-3" onClick={this.handleUserClick}><Trans>Users</Trans></button>
          </div>
          {this.state.page=='users'?
          <Users/>:null
          }
        </div>
      );
  }
}

const mapStateToProps=(state)=>({
  admin: state.admin
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getUsers: getUsers
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Admin)
