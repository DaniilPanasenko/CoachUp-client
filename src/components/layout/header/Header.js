import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import LanguageSelector  from './LanguageSelector'
import HeaderProfile from './HeaderProfile'
import Nav from './Nav'


class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand navbar-logo" href="#">CoachUp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" >
          <i className="fas fa-bars text-white"></i>
        </button>
        <Nav />
        <div className="d-inline-flex  flex-row align-items-center">
          <LanguageSelector />
          <HeaderProfile />
        </div>
      </nav>
    )
  }
}

const mapStateToProps=(state)=>({
  user : state.user
})

export default connect(mapStateToProps)(Header)
