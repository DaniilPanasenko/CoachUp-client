import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPage } from '../../../actions/page'
import {bindActionCreators} from 'redux'
import logo from "../../../img/logo.png"
import $ from 'jquery';
import { Trans } from '@lingui/macro';


class Nav extends React.Component {
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
  render() {
    if(this.props.user.isAuthorized){
      return (
        <div className="collapse navbar-collapse" >
          <ul className="nav nav-pills ml-auto mr-auto">
            <li className="nav-item active">
              <a className={"nav-link "+this.getActive('profile')} onClick={()=>this.handleClick('profile')}>
                <i className="fa fa-id-card fa-1x"></i>
                <Trans>Profile</Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link "+this.getActive('courses')} onClick={()=>this.handleClick('courses')}>
                <i className="fa fa-list-ul fa-1x "></i>
                <Trans>Courses</Trans>
              </a>
            </li>
            {!this.props.user.isCoach?
            <li className="nav-item">
              <a className={"nav-link "+this.getActive('rates')} onClick={()=>this.handleClick('rates')}>
                <i className="fa fa-trophy fa-1x "></i>
                <Trans>Rates</Trans>
              </a>
            </li>
            :null}
            <li className="nav-item">
              <a className={"nav-link "+this.getActive('search')} onClick={()=>this.handleClick('search')}>
                <i className="fa fa-search fa-1x "></i>
                <Trans>Search</Trans>
              </a>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="collapse navbar-collapse" >
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  user : state.user,
  page : state.page
})

function matchDispatchToProps(dispatch){
  return bindActionCreators({setPage: setPage}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Nav)
