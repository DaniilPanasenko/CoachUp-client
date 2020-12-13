import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../../actions/user'
import {bindActionCreators} from 'redux'
import logo from "../../../img/logo.png"
import $ from 'jquery';
import { Trans } from '@lingui/macro';
import LanguageSelector  from './LanguageSelector.js'


class HeaderProfile extends React.Component {
  logout = () =>{
    this.props.logout()
  }
  getActive = (page) => {
    if(page==this.props.page.page){
      return "active";
    }
    else{
      return "";
    }
  }
  render(){
    if(this.props.user.isAuthorized){
      return(
        <div className="d-inline-flex  flex-row align-items-center">
        <button type="button" class="btn btn-transparent">
        <i className="fa fa-envelope fa-1x white-icons" aria-hidden="true"></i>
<span class="badge badge-light badge-pill notifications">4</span>
</button>

          <div className="dropdown d-inline-flex flex-row align-items-center">
            <a className="link-profile nav-link dropdown-toggle" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.user.login}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/signin" onClick={()=>this.logout()}><Trans>Log Out</Trans></Link>
            </div>
          </div>
          <i className="fa fa-user-circle-o fa-2x white-icons " aria-hidden="true"></i>
        </div>
      );
    }
    else{
      return(
        <div className="collapse navbar-collapse" >
            <ul className="nav nav-pills ml-auto mr-auto pr-5">
                <Link className="nav-link" to="/signin">
                  <Trans>Sign In</Trans>
                </Link>
                <Link className="nav-link" to="/signup">
                  <Trans>Sign Up</Trans>
                </Link>
            </ul>
        </div>
      );
    }
  }
}

const mapStateToProps=(state)=>({
  user : state.user
})

function matchDispatchToProps(dispatch){
  return bindActionCreators({ logout: logout}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(HeaderProfile)
