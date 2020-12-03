import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPage } from '../../../actions/page'
import {bindActionCreators} from 'redux'
import logo from "../../../img/logo.png"
import $ from 'jquery';
import { Trans } from '@lingui/macro';
import LanguageSelector  from './LanguageSelector.js'


class Profile extends React.Component {
  handleClick = (page) => {
    this.props.setPage(page)
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
          <i className="fa fa-bell-o fa-1x white-icons" aria-hidden="true"></i>
          <div className="dropdown d-inline-flex flex-row align-items-center">
            <a className="link-profile nav-link dropdown-toggle" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.user.login}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item" href="#"><Trans>Log Out</Trans></button>
            </div>
          </div>
          <i className="fa fa-user-circle-o fa-2x white-icons " aria-hidden="true"></i>
        </div>
      );
    }
    else{
      return(
        <div className="collapse navbar-collapse" >
            <ul className="nav nav-pills ml-auto mr-auto">
                <li className="nav-item active">
                    <a className={"nav-link "+this.getActive('signin')} onClick={()=>this.handleClick('signin')}><Trans>Sign In</Trans></a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link "+this.getActive('signup')} onClick={()=>this.handleClick('signup')}><Trans>Sign Up</Trans></a>
                </li>
            </ul>
        </div>
      );
    }
  }
}

const mapStateToProps=(state)=>({
  user : state.user,
  page : state.page
})

function matchDispatchToProps(dispatch){
  return bindActionCreators({setPage: setPage}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Profile)
