import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { ban } from '../../actions/admin'


class Users extends React.Component{
  constructor(){
    super();
    this.state = {
    }
  }

  handleClick=(e)=>{
     this.props.ban(e.target.name);
  }

  userBanned=(login)=>{
    for(let i=0; i<this.props.admin.ban.length; i++){
      if(login==this.props.admin.ban[i]){
        return true;
      }
    }
    return false;
  }

  render(){
      return (
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><Trans>Login</Trans></th>
              <th scope="col"><Trans>Email</Trans></th>
              <th scope="col"><Trans>Status</Trans></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.admin.users.map((item, index)=>
              {
                if(item.login!='admin'){
                return(
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{item.login}</td>
                    <td>{item.email}</td>
                    <td>
                      <button name={item.login} class={"btn btn-block btn-"+(this.userBanned(item.login)?'danger':'success')} onClick={this.handleClick}>
                      {this.userBanned(item.login)?<Trans>Ban</Trans>:<Trans>OK</Trans>}
                      </button>
                    </td>
                  </tr>)
                }
              })
            }
          </tbody>
        </table>
      );
  }
}

const mapStateToProps=(state)=>({
  admin: state.admin
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      ban: ban
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Users)
