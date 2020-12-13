import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from "../../../img/logo.png"
import { Trans } from '@lingui/macro';


class Nav extends React.Component {

  render() {
    if(this.props.user.isAuthorized){
      return (
        <div className="collapse navbar-collapse" >
            <ul className="nav nav-pills ml-5 pr-5">
                <Link className="nav-link" to="/profile">
                  <Trans>Profile</Trans>
                </Link>
                <Link className="nav-link" to="/courses">
                  <Trans>Courses</Trans>
                </Link>
                {!this.props.user.isCoach?
                <Link className="nav-link" to="/rates">
                  <Trans>Rates</Trans>
                </Link>
                :null}
                <Link className="nav-link" to="/search">
                  <Trans>Search</Trans>
                </Link>
            </ul>
        </div>
        /*
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
        */
      );
    }
    return (
      <div className="collapse navbar-collapse" >
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  user : state.user
})

function matchDispatchToProps(dispatch){
  return bindActionCreators({

  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Nav)
