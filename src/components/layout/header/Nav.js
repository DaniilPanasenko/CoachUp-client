import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';


class Nav extends React.Component {

  render() {
    if(this.props.user.isAuthorized && this.props.user.login!="admin"){
      return (
        <div className="collapse navbar-collapse" >
            <ul className="nav nav-pills ml-5 pr-5">
                <Link className="nav-link" to={"/profile/"+this.props.user.login}>
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
